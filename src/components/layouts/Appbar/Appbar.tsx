import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { HEADER } from '../../../layouts/config';
import useOffsetTop from '../../../hooks/useOffsetTop';

interface AppbarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Appbar: FC<AppbarProps> = (props) => {
  const { children, className, ...rest } = props;

  const isOffsetTop = useOffsetTop();

  return (
    <header
      className={classNames(
        // MOBILE
        'sticky top-0 z-100',
        // 'border-b border-blue-500',
        'bg-white/75',
        'backdrop-blur-md',
        'transition-all duration-300 ease-in-out',
        [HEADER.HEIGHT_MOBILE],
        // DESKTOP

        {
          [HEADER.HEIGHT_DESKTOP_OFFSET]: isOffsetTop,
          [HEADER.HEIGHT_DESKTOP]: !isOffsetTop,
        },
        className
      )}
      {...rest}
    >
      {children}
    </header>
  );
};

export default Appbar;
