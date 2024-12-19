import classNames from 'classnames';
import {
  Children,
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from 'react';
import Iconify from '../Iconify';
import Modal from '../ui/Modal/Modal';

type SelectVariant = 'outlined';
type SelectDimension = 'default';

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode;
  className?: string;
  variant: SelectVariant;
  dimension: SelectDimension;
  fullWidth: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>((props) => {
  const {
    variant = 'outlined',
    dimension = 'default',
    fullWidth = true,
    // children,
    className,
    ...rest
  } = props;

  const [open, setOpen] = useState<boolean>(false);
  const [left, setLeft] = useState<number>(0);
  const [top, setTop] = useState<number>(0);

  const divRef = useRef<HTMLDivElement>(null);

  const handleOpen = () => {
    console.log(divRef.current?.getBoundingClientRect());

    setLeft(divRef.current?.getBoundingClientRect().left || 0);
    setTop(divRef.current?.getBoundingClientRect().top || 0);

    setOpen(true);
  };

  const selectVariant: {
    [key in SelectVariant]: { general: string; validation: string };
  } = {
    outlined: {
      general: classNames(
        'outline outline-1 outline-grey-500/20',
        'group-focus-within/field-wrap:outline-2 group-focus-within/field-wrap:outline-grey-800'
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
        <input className={styles} {...rest} />

        <Iconify
          width={18}
          icon={'eva:arrow-ios-downward-fill'}
          className={classNames(
            'text-grey-600 absolute top-[50%] right-2.5',
            ' -translate-y-[50%]'
          )}
        />
      </div>
      {open && (
        <Modal invisible onClick={() => setOpen(false)}>
          <div
            className={classNames(
              'absolute',
              'p-4',
              'shadow-menu',
              'min-w-52 max-h-60',
              'rounded-lg'
            )}
            style={{
              top: top + 61,
              left: left - 4,
            }}
          >
            <ul>
              <li>Admin</li>
              <li>Develope____________________________</li>
              <li>Supervisor</li>
              <li>User</li>
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
});

export default Select;
