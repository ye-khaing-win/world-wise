import classNames from 'classnames';
import { FC, ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  breakpoint?: string;
}

const Container: FC<ContainerProps> = (props) => {
  const { children, className, breakpoint = 'container', ...rest } = props;

  return (
    <div className={classNames('px-6 mx-auto', breakpoint, className)} {...rest}>
      {children}
    </div>
  );
};

export default Container;
