import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames(
        'relative z-0 overflow-hidden',
        'rounded-2xl',
        'shadow-card',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
