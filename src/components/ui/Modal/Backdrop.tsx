import classNames from 'classnames';
import { FC, HTMLAttributes } from 'react';

interface BackdropProps extends HTMLAttributes<HTMLDivElement> {
  invisible: boolean;
}

const Backdrop: FC<BackdropProps> = (props) => {
  const { invisible, ...rest } = props;

  return (
    <div
      className={classNames(
        {
          'opacity-0': invisible,
          'opacity-1': !invisible,
        },
        'fixed left-0 top-0 z-[1050]',
        'h-screen w-screen',
        'backdrop-blur-sm',
        'transition-opacity duration-300 ease-in-out'
      )}
      {...rest}
    />
  );
};

export default Backdrop;
