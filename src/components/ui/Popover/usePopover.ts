import { useState, MouseEvent, useCallback } from 'react';

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleOpen = useCallback((e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  return { anchorEl, onOpen: handleOpen, onClose: handleClose };
};

export default usePopover;
