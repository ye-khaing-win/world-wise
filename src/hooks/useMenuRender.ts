import { RefObject, useState } from 'react';

const useMenuRender = <T extends HTMLElement>(ref: RefObject<T | null>) => {
  const [open, setOpen] = useState<boolean>(false);
  const [domRect, setDomRect] = useState<DOMRect | null>(null);

  // HANDLERS
  const handleOpen = () => {
    setDomRect(ref?.current && ref.current.getBoundingClientRect());

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return { open, domRect, onOpen: handleOpen, onClose: handleClose };
};

export default useMenuRender;
