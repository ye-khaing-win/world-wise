import { FC, HTMLAttributes, ReactNode } from 'react';
import Portal from '../../layouts/Portal/Portal';
import classNames from 'classnames';
import Backdrop from './Backdrop';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  invisible?: boolean;
}

const Modal: FC<ModalProps> = (props) => {
  const { children, invisible = false, ...rest } = props;

  return (
    <Portal>
      <div
        className={classNames(
          'block',
          'fixed left-0 top-0 z-[1055]',
          'h-full w-full',
          'overflow-hidden'
        )}
        {...rest}
      >
        {children}
      </div>
      <Backdrop invisible={invisible} />
    </Portal>
  );
};

export default Modal;
