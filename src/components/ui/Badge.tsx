import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

const BADGE_COLORS = {
  default: {
    bg: 'bg-grey-800',
    text: 'text-white',
  },
  primary: {
    bg: 'bg-primary-light/20',
    text: 'text-primary-main',
  },
};

type BadgeColor = 'default' | 'primary';
// type BadgeColor = 'default' | 'primary' | 'secondary' | 'info' | 'warning' | 'error';
type BadgeVariant = 'solid';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  color?: BadgeColor;
  variant?: BadgeVariant;
}

const Badge: FC<BadgeProps> = (props) => {
  const { color = 'default', variant = 'solid', children, className, ...rest } = props;

  const badgeVariant: { [key in BadgeVariant]: string } = {
    solid: classNames([BADGE_COLORS[color].bg, BADGE_COLORS[color].text]),
  };

  const badgeVariantStyles = badgeVariant[variant];

  const styles = classNames(
    'inline-flex items-center justify-center',
    'px-1.5',
    'rounded-md',
    'text-xs',
    'min-h-6',
    // 'border',
    badgeVariantStyles,
    className
  );

  return (
    <span className={styles} {...rest}>
      {children}
    </span>
  );
};

export default Badge;
