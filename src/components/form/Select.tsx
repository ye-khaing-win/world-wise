import classNames from 'classnames';
import { Children, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import Iconify from '../Iconify';

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
    children,
    className,
    ...rest
  } = props;

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
        className={classNames('relative', {
          'w-full': fullWidth,
        })}
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
      <div className={classNames('p-4 shadow-menu min-w-52 rounded-lg')}>
        <ul>
          <li>Admin</li>
          <li>Developer</li>
          <li>Supervisor</li>
          <li>User</li>
        </ul>
      </div>
    </>
  );
});

export default Select;
