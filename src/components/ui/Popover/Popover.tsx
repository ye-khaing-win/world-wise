import { FC, ReactElement, ReactNode } from 'react';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom' | number;
  horizontal: 'left' | 'center' | 'right' | number;
}

interface PopoverProps {
  open?: boolean;
  children?: ReactNode;
  anchorEl?: HTMLElement;
  origin?: PopoverOrigin;
  onClose: () => void;
}

const Popover: FC<PopoverProps> = (props) => {
  const { open, anchorEl, onClose, children } = props;

  const domRect = anchorEl?.getBoundingClientRect();

  return (
    <Modal invisible open={open} onClose={onClose}>
      <Menu
        style={{
          top: domRect?.top ? domRect.top + 40 : 0,
          left: domRect?.left ? domRect.left : 0,
          minWidth: domRect?.width ? domRect.width : 0,
          // transformOrigin: '140px 0px',
        }}
      >
        {children}
      </Menu>
    </Modal>
  );
};

export default Popover;
