import classNames from 'classnames';
import {
  Children,
  cloneElement,
  FC,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useState,
} from 'react';

interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Tabs: FC<TabsProps> = (props) => {
  const { children, className, ...rest } = props;

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>(48);

  const handleSwitch = (index: number, l: number, w: number) => {
    setTabIndex(index);
    setLeft(l);
    setWidth(w);
  };

  return (
    <div
      className={classNames('relative', 'w-full', 'px-5', 'shadow-tabs', className)}
      {...rest}
    >
      <ul className={classNames('flex list-none flex-wrap', 'rounded-md')}>
        {Children.map(children, (child, i) => (
          <li key={i} className={classNames('mr-6 sm:mr-10', className)}>
            {cloneElement(child as ReactElement, {
              isActive: i === tabIndex,
              onSwitch: handleSwitch,
            })}
          </li>
        ))}
      </ul>

      <span
        className={classNames(
          'block h-0.5 bg-grey-800',
          'bottom-0 z-10',
          'transition-all duration-200 ease-in-out'
        )}
        style={{
          position: 'absolute',
          left: left + 'px',
          width: width + 'px',
        }}
      />
    </div>
  );
};

export default Tabs;
