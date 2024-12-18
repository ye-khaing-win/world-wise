import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';
import { TColor } from '../../types/color';

const BADGE_COLORS = {
  default: {
    bg: 'bg-grey-500/20',
    text: 'text-grey-600',
  },
  primary: {
    bg: 'bg-primary-light/20',
    text: 'text-primary-main',
  },
  secondary: {
    bg: 'bg-secondary-light/20',
    text: 'text-secondary-main',
  },
  info: {
    bg: 'bg-info-main/20',
    text: 'text-info-dark',
  },
  success: {
    bg: 'bg-success-main/20',
    text: 'text-success-dark',
  },
  warning: {
    bg: 'bg-warning-main/20',
    text: 'text-warning-dark',
  },
  error: {
    bg: 'bg-error-main/20',
    text: 'text-error-dark',
  },
};

type BadgeVariant = 'solid';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  className?: string;
  color?: TColor;
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
    'min-w-6 min-h-6',
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
