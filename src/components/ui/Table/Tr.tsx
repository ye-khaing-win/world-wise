import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
  className?: string;
}

const Tr: FC<TrProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <tr className={classNames('table-row', className)} {...rest}>
      {children}
    </tr>
  );
};

export default Tr;
