import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  id?: string;
}

const Portal: FC<PortalProps> = (props) => {
  const { children, id = 'portal-root' } = props;

  const mount = document.getElementById(id as string);

  if (mount) return createPortal(children, mount);

  return null;
};

export default Portal;
