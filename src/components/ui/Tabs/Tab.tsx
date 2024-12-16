import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface TabProps extends HTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
}

const Tab: FC<TabProps> = (props) => {
  const { children, isActive, className } = props;

  return (
    <li className={classNames('mr-6 sm:mr-10', className)}>
      <button
        className={classNames(
          'min-w-12 min-h-12',
          'font-semibold',
          'flex items-center justify-center',
          {
            'text-grey-600 text-sm': !isActive,
            // 'border-b-2 border-black': !isActive,
          }
        )}
      >
        {children}
      </button>
    </li>
  );
};

export default Tab;
