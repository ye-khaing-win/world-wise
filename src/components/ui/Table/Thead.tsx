import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface TheadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
  className?: string;
}

const Thead: FC<TheadProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <thead className={classNames('table-header-group', className)} {...rest}>
      {children}
    </thead>
  );
};

export default Thead;
