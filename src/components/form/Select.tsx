import classNames from 'classnames';
import {
  cloneElement,
  forwardRef,
  InputHTMLAttributes,
  ReactElement,
  useRef,
  useState,
} from 'react';
import Iconify from '../Iconify';
import Modal from '../ui/Modal/Modal';

type SelectVariant = 'outlined';
type SelectDimension = 'default';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactElement;
  className?: string;
  variant?: SelectVariant;
  dimension?: SelectDimension;
  fullWidth?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props) => {
  const {
    variant = 'outlined',
    dimension = 'default',
    fullWidth = true,
    children,
    className,
    ...rest
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [domRect, setDomRect] = useState<DOMRect | null>(null);

  const divRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    setDomRect(divRef?.current && divRef.current.getBoundingClientRect());

    setOpen(true);
  };

  const selectVariant: {
    [key in SelectVariant]: { general: string; validation: string };
  } = {
    outlined: {
      general: classNames(
        'outline outline-1 outline-grey-500/20',
        'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800',
        { 'outline-2 outline-grey-800': open }
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
    className,
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
        <input className={styles} {...rest} readOnly />

        <Iconify
          width={18}
          icon={'eva:arrow-ios-downward-fill'}
          className={classNames(
            'text-grey-600 absolute top-[50%] right-2.5',
            ' -translate-y-[50%]'
          )}
        />
      </div>

      <Modal
        invisible
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        {cloneElement(children, {
          className: 'text-grey-800 z-[120]',
          style: {
            top: domRect?.top ? domRect.top + 61 : 0,
            left: domRect?.left ? domRect.left : 0,
            minWidth: domRect?.width ? domRect.width : 0,
          },
        })}
      </Modal>
    </>
  );
});

export default Select;
