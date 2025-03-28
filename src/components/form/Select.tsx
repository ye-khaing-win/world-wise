import {
  Children,
  cloneElement,
  forwardRef,
  MouseEvent,
  ReactElement,
  Ref,
  RefObject,
  // ReactNode,
  useRef,
} from 'react';
import Iconify from '../Iconify';
import classNames from 'classnames';
import Modal from '../ui/Modal/Modal';
import Menu from '../ui/Menu/Menu';
import { MenuItemProps } from '../ui/Menu/MenuItem';
import useMenuRender from '../../hooks/useMenuRender';
import Input from './Input';
import InputWrap from './InputWrap';

export type SelectChangeEvent<T> = Event & {
  target: { value: T };
};
// | React.ChangeEvent<HTMLInputElement>;

type SelectVariant = 'outlined';
type SelectDimension = 'default';

interface SelectProps<T> {
  ref?: RefObject<HTMLInputElement>;
  fullWidth?: boolean;
  value: T;
  renderValue: (val: T) => string;
  variant?: SelectVariant;
  dimension?: SelectDimension;
  children: ReactElement[];
  className?: string;
  onChange?: (e: SelectChangeEvent<T>) => void;
}

function SelectBase<T>(props: SelectProps<T>, ref: Ref<HTMLInputElement>) {
  const {
    fullWidth = true,
    value,
    renderValue,
    children,
    className,
    variant = 'outlined',
    dimension = 'default',
    onChange,
    ...rest
  } = props;

  const multiple = Array.isArray(value);

  // HOOKS
  const divRef = useRef<HTMLDivElement>(null);

  const { domRect, open, onOpen, onClose } =
    useMenuRender<HTMLDivElement>(divRef);

  const handleSelect = (child: ReactElement) => {
    return (e: MouseEvent<HTMLLIElement>) => {
      e.stopPropagation();

      let newValue: string | string[];

      if (multiple) {
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
          ) as SelectChangeEvent<T>;

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

  return (
    <div ref={divRef} className="relative" onClick={onOpen}>
      <InputWrap
        lastChild={
          <Iconify
            width={20}
            icon="eva:arrow-ios-downward-fill"
            className="text-grey-600"
          />
        }
      >
        <Input
          ref={ref}
          fullWidth={fullWidth}
          variant={variant}
          dimension={dimension}
          value={renderValue ? renderValue(value) : (value as string)}
          readOnly
          className={classNames('pr-8 z-0', className)}
          {...rest}
        />
      </InputWrap>
      <Modal invisible open={open} onClose={onClose}>
        <Menu
          className="overflow-y-scroll max-h-[14rem] no-scrollbar"
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
}

const Select = forwardRef(SelectBase) as <T>(
  props: SelectProps<T> & { ref?: Ref<HTMLInputElement> }
) => ReactElement;

export default Select;
