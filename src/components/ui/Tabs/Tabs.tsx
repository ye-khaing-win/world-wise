import classNames from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import useTabs from '../../../hooks/useTabs';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Tabs: FC<TabsProps> = (props) => {
  const { children, className, ...rest } = props;

  const { tabIndex, left, width, onSwitch, setItemRef } = useTabs();

  return (
    <div
      className={classNames('w-full', 'px-5', 'shadow-tabs', className)}
      {...rest}
    >
      <div className="relative">
        <ul className={classNames('flex list-none flex-wrap', 'rounded-md')}>
          {Children.map(children, (child, i) => (
            <li
              ref={(node) => {
                setItemRef(i, node);
              }}
              key={i}
              className={classNames('mr-6 sm:mr-10', className)}
            >
              {cloneElement(child as ReactElement, {
                isActive: i === tabIndex,
                onSwitch,
              })}
            </li>
          ))}
        </ul>
        <span
          className={classNames(
            'absolute',
            'h-0.5 bg-grey-800',
            'bottom-0 z-[100]',
            'transition-all duration-200 ease-in'
          )}
          style={{
            left,
            width,
          }}
        />
      </div>
    </div>
  );
};

export default Tabs;
