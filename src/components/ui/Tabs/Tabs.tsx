import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Tabs: FC<TabsProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames(
        'w-full relative',
        'px-5',
        'border-grey-200 border-b-2',
        className
      )}
      {...rest}
    >
      <ul className={classNames('relative', 'flex list-none flex-wrap', 'rounded-md')}>
        {children}
      </ul>
    </div>
  );
};

export default Tabs;
