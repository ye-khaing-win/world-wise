import classNames from 'classnames';
import { FC, LabelHTMLAttributes, ReactNode } from 'react';

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
  shrink?: boolean;
}

const Label: FC<ILabelProps> = (props) => {
  const { children, className, shrink = true, ...rest } = props;

  return (
    <label
      className={classNames(
        'bg-white px-2 z-20',
        'text-grey-800 text-sm font-semibold',
        'transition-all duration-200 ease-linear',
        // 'group-focus-within:text-grey-800 group-hover:text-grey-800/80',
        'origin-top-left',

        'translate-x-[6px] translate-y-[18px] scale-100 ',
        'group-has-[:placeholder-shown]:translate-x-[6px] group-has-[:placeholder-shown]:translate-y-[18px] group-has-[:placeholder-shown]:scale-100',
        'group-has-[:placeholder-shown]:font-normal group-has-[:placeholder-shown]:text-grey-500',
        'group-has-[:focus]:font-semibold group-has-[:focus]:text-grey-800',
        'group-has-[:focus]:translate-x-[8.5px] group-has-[:focus]:-translate-y-[7px] group-has-[:focus]:scale-75',
        {
          'absolute left-0 top-0': shrink,
        },
        className
      )}
      {...rest}
    >
      {children}
    </label>
  );
};

export default Label;
