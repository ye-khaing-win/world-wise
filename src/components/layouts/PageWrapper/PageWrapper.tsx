import { FC, ReactNode } from 'react';

import classNames from 'classnames';
import useDocumentTitle from '../../../hooks/useDocumentTitle';

interface IPageWrapperProps {
  children: ReactNode;
  className?: string;
  isProtectedRoute?: boolean;
  title?: string;
  name?: string;
}

const PageWrapper: FC<IPageWrapperProps> = (props) => {
  const {
    children,
    className,
    title = 'World-wise',
    name = 'Adventures',
    ...rest
  } = props;

  useDocumentTitle({ title, name });

  return (
    <main
      data-component-name="PageWrapper"
      className={classNames('', className)}
      {...rest}
    >
      {children}
    </main>
  );
};

export default PageWrapper;
