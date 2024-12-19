import classNames from 'classnames';
import { FC, LabelHTMLAttributes, ReactNode } from 'react';

type LabeVariant = 'default' | 'shrink';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
  variant: LabeVariant;
}

const Label: FC<LabelProps> = (props) => {
  const { variant = 'default', children, className, ...rest } = props;

  const labelVariant: { [key in LabeVariant]: string } = {
    default: classNames(''),
    shrink: classNames(
      'absolute left-0 top-0',
      'origin-top-left',
      'translate-x-[8.5px] -translate-y-[8px] scale-75'
    ),
  };

  const labelVariantStyles = labelVariant[variant];

  const styles = classNames(
    'bg-white',
    'px-2',
    'z-10',
    'text-grey-500 text-sm font-semibold',
    'group-focus-within/field-wrap:text-grey-800',
    labelVariantStyles,
    className
  );

  return (
    <label className={styles} {...rest}>
      {children}
    </label>
  );
};

export default Label;
