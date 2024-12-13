import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface IAsideBodyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AsideBody: FC<IAsideBodyProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={classNames('px-4', className)} {...rest}>
      {children}
    </div>
  );
};

export default AsideBody;
