import { forwardRef, InputHTMLAttributes } from 'react';
import { TColor } from '../../types/color';
import classNames from 'classnames';

type CheckboxVariant = 'default';
type CheckboxDimension = 'default';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked?: boolean;
  color?: TColor;
  variant?: CheckboxVariant;
  dimension?: CheckboxDimension;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const {
    checked,
    color,
    variant = 'default',
    dimension = 'default',
    className,
    ...rest
  } = props;

  const checkboxVariant: {
    [key in CheckboxVariant]: { general: string; validation: string };
  } = {
    default: {
      general: classNames('checked:bg-red-400'),
      validation: classNames(),
    },
  };

  const checkboxVariantStyles = checkboxVariant[variant].general;

  const checkboxDimension: { [key in CheckboxDimension]: string } = {
    default: classNames('h-full w-full'),
  };

  const checkboxDimensionStyles = checkboxDimension[dimension];

  const checkboxStyles = classNames(
    'cursor-pointer appearance-auto',
    checkboxVariantStyles,
    checkboxDimensionStyles
  );

  return (
    <span
      className={classNames(
        'p-1 -ml-1 mr-1',
        'rounded',
        'flex items-center justify-center',
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        // checked={checked}
        className="appearance-none"
        {...rest}
      />

      {checked ? (
        <svg
          className={classNames('inline-block text-xl h-[1em] w-[1em]')}
          fill="#00A76F"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm-1.625 7.255-4.13 4.13-1.75-1.75a.881.881 0 0 0-1.24 0c-.34.34-.34.89 0 1.24l2.38 2.37c.17.17.39.25.61.25.23 0 .45-.08.62-.25l4.75-4.75c.34-.34.34-.89 0-1.24a.881.881 0 0 0-1.24 0Z"></path>
        </svg>
      ) : (
        <svg
          className={classNames('inline-block text-xl h-[1em] w-[1em]')}
          fill="#637381"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
        >
          <path d="M17.9 2.318A5 5 0 0 1 22.895 7.1l.005.217v10a5 5 0 0 1-4.783 4.995l-.217.005h-10a5 5 0 0 1-4.995-4.783l-.005-.217v-10a5 5 0 0 1 4.783-4.996l.217-.004h10Zm-.5 1.5h-9a4 4 0 0 0-4 4v9a4 4 0 0 0 4 4h9a4 4 0 0 0 4-4v-9a4 4 0 0 0-4-4Z"></path>
        </svg>
      )}
    </span>
  );
});

export default Checkbox;
