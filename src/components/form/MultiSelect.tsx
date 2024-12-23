import {
  Children,
  cloneElement,
  forwardRef,
  MouseEvent,
  ReactElement,
  useRef,
  useState,
} from 'react';
import Iconify from '../Iconify';
import classNames from 'classnames';
import Modal from '../ui/Modal/Modal';
import Menu from '../ui/Menu/Menu';
import { MenuItemProps } from '../ui/Menu/MenuItem';

export type SelectChangeEvent<T = string> =
  | (Event & { target: { value: T } })
  | React.ChangeEvent<HTMLInputElement>;

type SelectVariant = 'outlined';
type SelectDimension = 'default';

interface SelectProps {
  value?: string | string[];
  renderValue?: (val?: string | string[]) => string | undefined;
  variant?: SelectVariant;
  dimension?: SelectDimension;
  multiple?: boolean;
  children: ReactElement[];
  className?: string;
  onChange?: (e: SelectChangeEvent) => void;
}

const defaultRenderValue = (val: string | string[]) => {
  if (!val) return '';

  return Array.isArray(val) ? val.join(', ') : val;
};

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    value = '',
    renderValue = defaultRenderValue,
    children,
    className,
    variant = 'outlined',
    dimension = 'default',
    multiple = false,
    onChange,
    ...rest
  } = props;

  // HOOKS
  const divRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [domRect, setDomRect] = useState<DOMRect | null>(null);

  // HANDLERS
  const handleOpen = () => {
    setDomRect(divRef?.current && divRef.current.getBoundingClientRect());

    setOpen(true);
  };

  const handleSelect = (child: ReactElement) => {
    return (e: MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();

      let newValue: string | string[];

      if (multiple && Array.isArray(value)) {
        console.log(value);
        newValue = value.slice() || [];
        const itemIndex = value.indexOf(child.props.value);

        if (itemIndex === -1) {
          newValue.push(child.props.value);
        } else {
          newValue.splice(itemIndex, 1);
        }
      } else {
        newValue = child.props.value;
        setOpen(false);
      }

      if (child.props.onClick) {
        child.props.onClick(e);
      }

      if (value !== newValue) {
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

  // STYLES
  // Variant
  const selectVariant: {
    [key in SelectVariant]: {
      general: string;
      validation: string;
    };
  } = {
    outlined: {
      general: classNames(
        'outline outline-1 outline-grey-500/20',
        'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800'
      ),
      validation: classNames(),
    },
  };

  const selectVariantStyles = selectVariant[variant].general;

  // Dimension
  const selectDimension: {
    [key in SelectDimension]: string;
  } = {
    default: classNames('h-14', 'p-4 pr-8', 'text-sm'),
  };

  const selectDimensionStyles = selectDimension[dimension];

  // Styles
  const selectStyles = classNames(
    'cursor-pointer',
    'border-none',
    'rounded-lg',
    'text-grey-800',
    selectVariantStyles,
    selectDimensionStyles,
    className
  );

  return (
    <div ref={divRef} className="relative" onClick={handleOpen}>
      <input
        ref={ref}
        className={selectStyles}
        value={renderValue?.(value) || ''}
        {...rest}
        readOnly
      />
      <Iconify
        width={20}
        icon="eva:arrow-ios-downward-fill"
        className={classNames(
          'text-grey-600 absolute top-1/2 right-2.5',
          '-translate-y-1/2'
        )}
      />
      <Modal invisible open={open} onClose={() => setOpen(false)}>
        <Menu
          style={{
            top: domRect?.top ? domRect.top + 61 : 0,
            left: domRect?.left ? domRect.left : 0,
            minWidth: domRect?.width ? domRect.width : 0,
          }}
          // To prevent focus on Menu
          onMouseDown={(e) => e.preventDefault()}
        >
          {Children.map(children, (child) => {
            const itemValue = child.props.value;

            return cloneElement<MenuItemProps>(child, {
              selected: Array.isArray(value)
                ? value.includes(itemValue)
                : false,
              role: 'option',
              onClick: handleSelect(child),
            });
          })}
        </Menu>
      </Modal>
    </div>
  );
});

export default Select;
