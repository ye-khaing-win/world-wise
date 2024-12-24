import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface FieldWrapProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const FieldWrap: FC<FieldWrapProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames('group/field-wrap relative', className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default FieldWrap;
