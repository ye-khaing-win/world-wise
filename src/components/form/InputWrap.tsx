import classNames from 'classnames';
import {
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import { InputProps } from './Input';

interface InputWrapProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
  className?: string;
  firstChild?: ReactNode;
  lastChild?: ReactNode;
}

const InputWrap = forwardRef<HTMLDivElement, InputWrapProps>((props, ref) => {
  const { children, className, firstChild, lastChild, ...rest } = props;

  return (
    <div ref={ref} className={classNames('relative', className)} {...rest}>
      {firstChild && (
        <div
          className={classNames(
            'absolute top-1/2 left-[14px] -translate-y-1/2'
          )}
        >
          {firstChild}
        </div>
      )}
      {cloneElement<InputProps>(children, {
        style: {
          paddingLeft: firstChild ? 38 : 14,
          paddingRight: lastChild ? 38 : 14,
        },
      })}
      {lastChild && (
        <div
          className={classNames(
            'absolute top-1/2 right-[12px] -translate-y-1/2'
          )}
        >
          {lastChild}
        </div>
      )}
    </div>
  );
});

export default InputWrap;
