import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode, useEffect, useLayoutEffect, useRef } from 'react';

interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isActive?: boolean;
  value: number;
  onSwitch?: (index: number, left: number, width: number) => void;
}

const Tab: FC<TabProps> = (props) => {
  const { value, children, isActive, onSwitch, className } = props;

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onSwitch?.(value, buttonRef.current?.offsetLeft, buttonRef.current?.offsetWidth);
  };

  return (
    <button
      ref={buttonRef}
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
