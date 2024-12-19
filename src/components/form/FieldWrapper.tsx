import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface FieldWrapperProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const FieldWrapper: FC<FieldWrapperProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div className={classNames('group relative', className)} {...rest}>
      {children}
    </div>
  );
};

export default FieldWrapper;
