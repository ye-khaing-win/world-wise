import { FC, ReactNode, useCallback, useEffect, useRef } from 'react';
import Menu from '../Menu/Menu';
import Modal from '../Modal/Modal';
import classNames from 'classnames';

export interface PopoverOrigin {
  vertical: 'top' | 'center' | 'bottom';
  horizontal: 'left' | 'center' | 'right';
}

const getOffsetTop = (rect: DOMRect, vertical: 'top' | 'center' | 'bottom') => {
  let offset: number;
  switch (vertical) {
    case 'top':
      offset = 0;
      break;
    case 'center':
      offset = rect.height / 2;
      break;
    case 'bottom':
      offset = rect.height;
      break;
  }
  return offset;
};

const getOffsetLeft = (
  rect: DOMRect,
  horizontal: 'left' | 'center' | 'right'
) => {
  let offset: number;

  switch (horizontal) {
    case 'left':
      offset = 0;
      break;
    case 'center':
      offset = rect.width / 2;
      break;
    case 'right':
      offset = rect.width;
      break;
  }

  return offset;
};

const getTransformOriginValue = (transformOrigin: {
  vertical: number;
  horizontal: number;
}) => {
  return [transformOrigin.horizontal, transformOrigin.vertical].join(' ');
};

interface PopoverProps {
  open?: boolean;
  children?: ReactNode;
  anchorEl?: HTMLElement | null;
  anchorOrigin?: PopoverOrigin;
  transformOrigin?: PopoverOrigin;
  marginThreshold?: number;
  onClose: () => void;
  className?: string;
}

const Popover: FC<PopoverProps> = (props) => {
  const {
    open,
    anchorEl,
    anchorOrigin = { vertical: 'center', horizontal: 'left' },
    transformOrigin = { vertical: 'center', horizontal: 'right' },
    marginThreshold = 16,
    onClose,
    children,
    className,
  } = props;

  const menuRef = useRef<HTMLDivElement>(null);

  const getAnchorOffset = useCallback(() => {
    // If an anchor element wasn't provided, just use the body element
    const anchorElement =
      anchorEl && anchorEl.nodeType === 1 ? anchorEl : document.body;

    const anchorRect = anchorElement.getBoundingClientRect();

    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left:
        anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal),
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical]);

  const getTransformOrigin = useCallback(
    (elemRef: DOMRect) => {
      return {
        vertical: getOffsetTop(elemRef, transformOrigin.vertical),
        horizontal: getOffsetLeft(elemRef, transformOrigin.horizontal),
      };
    },
    [transformOrigin.horizontal, transformOrigin.vertical]
  );

  const getPositioningStyle = useCallback(
    (element: HTMLDivElement) => {
      const elemRect = {
        width: element.offsetWidth,
        height: element.offsetHeight,
      } as DOMRect;

      console.log({ elemRect });

      const elemTransformOrigin = getTransformOrigin(elemRect);

      console.log({ elemTransformOrigin });

      const anchorOffset = getAnchorOffset();

      // Calculate element positioning
      let top = anchorOffset.top - elemTransformOrigin.vertical;
      let left = anchorOffset.left - elemTransformOrigin.horizontal;
      const bottom = top + elemRect.height;
      const right = left + elemRect.width;

      const heightThreshold = window.innerHeight - marginThreshold;
      const widthThreshold = window.innerWidth - marginThreshold;

      if (top < marginThreshold) {
        const diff = top - marginThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        const diff = bottom - heightThreshold;
        top -= diff;
        elemTransformOrigin.vertical += diff;
      }

      if (left < marginThreshold) {
        const diff = left - marginThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      } else if (right > widthThreshold) {
        const diff = right - widthThreshold;
        left -= diff;
        elemTransformOrigin.horizontal += diff;
      }

      console.log({
        top,
        left,
        heightThreshold,
        widthThreshold,
        elemTransformOrigin,
      });

      return {
        top: `${Math.round(top)}px`,
        left: `${Math.round(left)}px`,
        transformOrigin: getTransformOriginValue(elemTransformOrigin),
      };
    },
    [getAnchorOffset, getTransformOrigin, marginThreshold]
  );

  const setPositioningStyle = useCallback(() => {
    const element = menuRef?.current;

    console.log({ element });

    if (!element) return;

    const positioning = getPositioningStyle(element);

    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }

    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
  }, [getPositioningStyle]);

  useEffect(() => {
    setPositioningStyle();
  }, [anchorEl, setPositioningStyle]);

  const arrowStyles = classNames('');

  return (
    <Modal invisible open={open} onClose={onClose}>
      <Menu ref={menuRef} className={classNames(className)}>
        {children}
        <span className={arrowStyles} />
      </Menu>
    </Modal>
  );
};

export default Popover;
