import classNames from 'classnames';
import { FC, ReactNode, TableHTMLAttributes } from 'react';

interface TableProps extends TableHTMLAttributes<HTMLTableCaptionElement> {
  children: ReactNode;
  className?: string;
}

const Table: FC<TableProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <table
      className={classNames('table', 'w-full', 'min-w-[60rem]', className)}
      {...rest}
    >
      {children}
    </table>
  );
};

export default Table;
