import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import useSettings from '../../../hooks/useSettings';

interface IAsideHeadProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
}

const AsideHead: FC<IAsideHeadProps> = (props) => {
  const { children, className, ...rest } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <div
      className={classNames(
        'flex items-center',
        {
          'justify-center': isAsideCollapsed,
        },
        'px-4 py-4',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default AsideHead;
