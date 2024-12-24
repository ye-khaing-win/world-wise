import { Icon, IconProps as Props } from '@iconify/react';
import classNames from 'classnames';
import { forwardRef } from 'react';

interface IconifyProps extends Props {
  icon: string;
  className?: string;
}

const Iconify = forwardRef<SVGSVGElement, IconifyProps>((props, ref) => {
  const { icon, className, ...rest } = props;

  return (
    <Icon
      width={20}
      ref={ref}
      icon={icon}
      className={classNames(className)}
      {...rest}
    />
  );
});

export default Iconify;
