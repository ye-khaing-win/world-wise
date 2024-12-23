import {
  Children,
  cloneElement,
  forwardRef,
  MouseEvent,
  ReactElement,
  useRef,
} from 'react';
import Iconify from '../Iconify';
import classNames from 'classnames';
import Modal from '../ui/Modal/Modal';
import Menu from '../ui/Menu/Menu';
import { MenuItemProps } from '../ui/Menu/MenuItem';
import useMenuRender from '../../hooks/useMenuRender';
import { SelectChangeEvent, SelectDimension, SelectVariant } from './types';
import { selectDefaultStyles, selectDimension, selectVariant } from './styles';

interface SelectProps {
  multiple?: boolean;
  fullWidth?: boolean;
  value?: string | string[];
  renderValue?: (val: SelectProps['value']) => string;
  variant?: SelectVariant;
  dimension?: SelectDimension;
  children: ReactElement[];
  className?: string;
  onChange?: (e: SelectChangeEvent) => void;
}

const Select = forwardRef<HTMLInputElement, SelectProps>((props, ref) => {
  const {
    multiple = false,
    value = '',
    renderValue,
    children,
    className,
    variant = 'outlined',
    dimension = 'default',
    onChange,
    ...rest
  } = props;

  // HOOKS
  const divRef = useRef<HTMLDivElement>(null);

  const { domRect, open, onOpen, onClose } =
    useMenuRender<HTMLDivElement>(divRef);

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
        onClose();
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
  const selectVariantStyles = selectVariant[variant].general;
  const selectDimensionStyles = selectDimension[dimension];
  const selectStyles = classNames(
    selectDefaultStyles,
    selectVariantStyles,
    selectDimensionStyles,
    className
  );

  return (
    <div ref={divRef} className="relative" onClick={onOpen}>
      <input
        ref={ref}
        className={selectStyles}
        value={renderValue ? renderValue(value) : value}
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
      <Modal invisible open={open} onClose={onClose}>
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
