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
        'bg-white px-2',
        'text-grey-500 text-sm',
        'transition-all duration-200 ease-linear',
        'group-focus-within:text-grey-800 group-hover:text-grey-800/80',
        'origin-top-left',
        'translate-x-[8.5px] -translate-y-[7px] scale-75',
        'peer-has-[:focus]:translate-x-[8.5px] peer-has-[:focus]:-translate-y-[7px] peer-has-[:focus]:scale-75',
        'peer-has-[:placeholder-shown]:translate-x-[6.5px] peer-has-[:placeholder-shown]:translate-y-[16px] peer-has-[:placeholder-shown]:scale-100 ',
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
