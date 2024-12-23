import classNames from 'classnames';
import React, {
  cloneElement,
  forwardRef,
  ReactElement,
  useRef,
  useState,
  MouseEvent,
  Children,
  InputHTMLAttributes,
} from 'react';
import Iconify from '../Iconify';
import Modal from '../ui/Modal/Modal';
import Menu from '../ui/Menu/Menu';

type SelectVariant = 'outlined';
type SelectDimension = 'default';

export type SelectChangeEvent<T = string> =
  | (Event & { target: { value: T } })
  | React.ChangeEvent<HTMLInputElement>;

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  multiple?: boolean;
  value: string[];
  renderedValue?: (value: string[]) => string;
  children: ReactElement[];
  className?: string;
  variant?: SelectVariant;
  dimension?: SelectDimension;
  fullWidth?: boolean;
  onChange?: (e: SelectChangeEvent) => void;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    value,
    renderedValue,
    multiple,
    variant = 'outlined',
    dimension = 'default',
    fullWidth = true,
    children,
    className,
    onChange,
    ...rest
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [domRect, setDomRect] = useState<DOMRect | null>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setDomRect(divRef?.current && divRef.current.getBoundingClientRect());

    setOpen(true);
  };

  const handleItemClick = (child: ReactElement) => {
    return (e: MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();
      let newValue: string | string[];

      if (multiple) {
        newValue = Array.isArray(value) ? value.slice() : [];
        const itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
      }

      if (child.props.onClick) {
        child.props.onClick(e);
      }

      if (value !== newValue) {
        // setValueState(newValue);
        if (onChange) {
          const nativeEvent = e.nativeEvent || e;

          const clonedEvent = new Event(
            nativeEvent.type,
            nativeEvent
          ) as SelectChangeEvent;

          Object.defineProperty(clonedEvent, 'target', {
            writable: true,
            value: {
              value: newValue,
            },
          });

          onChange(clonedEvent);
        }
      }
    };
  };

  const selectVariant: {
    [key in SelectVariant]: { general: string; validation: string };
  } = {
    outlined: {
      general: classNames(
        'outline outline-1 outline-grey-500/20',
        'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800'
        // { 'outline-2 outline-grey-800': open }
      ),
      validation: classNames(),
    },
  };

  const selectDimension: { [key in SelectDimension]: string } = {
    default: classNames('h-14', 'py-4 px-[14px]', 'text-sm'),
  };

  const selectVariantStyles = selectVariant[variant].general;
  const selectDimensionStyles = selectDimension[dimension];

  const styles = classNames(
    'cursor-pointer',
    'border-none',
    'rounded-lg',
    'text-grey-800',
    selectVariantStyles,
    selectDimensionStyles,
    className
  );

  return (
    <>
      <div
        ref={divRef}
        className={classNames('relative', {
          'w-full': fullWidth,
        })}
        onClick={handleOpen}
      >
        <input
          ref={ref}
          className={styles}
          value={renderedValue?.(value)}
          {...rest}
          readOnly
          // onChange={(e, child) => {}}
          onChange={onChange}
        />

        <Iconify
          // width={18}
          icon={'eva:arrow-ios-downward-fill'}
          className={classNames(
            'text-grey-600 absolute top-[50%] right-2.5',
            ' -translate-y-[50%] w-5 h-5'
          )}
        />
        <Modal
          invisible
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Menu
            className={classNames('')}
            style={{
              top: domRect?.top ? domRect.top + 61 : 0,
              left: domRect?.left ? domRect.left : 0,
              minWidth: domRect?.width ? domRect.width : 0,
            }}
            onMouseDown={(e: MouseEvent<HTMLElement>) => {
              e.preventDefault();
            }}
          >
            {Children.map(children, (child) => {
              const { value: itemValue } = child.props;

              return cloneElement(child, {
                selected: value.includes(itemValue),
                role: 'option',
                onClick: handleItemClick(child),
              });
            })}
          </Menu>
        </Modal>
      </div>
    </>
  );
});

export default Select;
