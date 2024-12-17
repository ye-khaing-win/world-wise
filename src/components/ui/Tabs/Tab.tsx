import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  value: number;
  onSwitch?: (index: number) => void;
}

const Tab: FC<TabProps> = (props) => {
  const { value, children, isActive, onSwitch, className } = props;

  const handleClick = () => {
    onSwitch?.(value);
  };

  return (
    <button
      onClick={handleClick}
      className={classNames(
        'min-w-12 min-h-12',
        'font-semibold text-sm',
        'flex items-center justify-center',

        {
          'text-grey-600': !isActive,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Tab;
