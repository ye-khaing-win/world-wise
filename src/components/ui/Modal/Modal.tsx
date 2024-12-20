import { FC, HTMLAttributes, ReactNode, useRef, useEffect } from 'react';
import Portal from '../../layouts/Portal/Portal';
import classNames from 'classnames';
import Backdrop from './Backdrop';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  invisible?: boolean;
  open?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { children, invisible = false, open, onClose, ...rest } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (e: { target: any }) => {
      if (ref.current && !ref.current.contains(e.target)) {
        console.log('here');
        onClose?.();
      }
    };

    document.addEventListener('click', handler, true);

    return () => document.removeEventListener('click', handler);
  }, [onClose]);

  return (
    <Portal>
      {open && (
        <>
          <div
            className={classNames(
              'block',
              'fixed left-0 top-0 z-[110]',
              'h-full w-full',
              'overflow-hidden'
            )}
            {...rest}
          >
            <div ref={ref}>{children}</div>
          </div>
          <Backdrop invisible={invisible} />
        </>
      )}
    </Portal>
  );
};

export default Modal;
