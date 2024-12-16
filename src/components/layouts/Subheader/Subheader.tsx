import classNames from 'classnames';
import { FC, HTMLAttributes, ReactNode } from 'react';

import { SUB_HEADER } from '../../../layouts/config';

interface SubheaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const Subheader: FC<SubheaderProps> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <div
      className={classNames(
        [SUB_HEADER.TOP, SUB_HEADER.HEIGHT_DESKTOP],
        // 'sticky z-10',
        'flex justify-between items-center gap-4',
        'xs:mb-3 md:mb-5', // TODO: NEED TO CHECK
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Subheader;
