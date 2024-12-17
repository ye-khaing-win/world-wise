import { useLayoutEffect, useRef, useState } from 'react';

const useTabs = () => {
  const ref = useRef<Map<number, HTMLLIElement | null> | null>(null);

  const [tabIndex, setTabIndex] = useState<number>(0);
  const [left, setLeft] = useState<number>(0);
  const [width, setWidth] = useState<number>();

  const getMap = () => {
    if (!ref.current) {
      ref.current = new Map();
    }

    return ref.current;
  };

  const setItemRef = (index: number, node: HTMLLIElement | null) => {
    const map = getMap();
    map.set(index, node);
  };

  const handleSwitch = (index: number) => {
    setTabIndex(index);

    const map = getMap();
    const left = map.get(index)?.offsetLeft || 0;
    const width = map.get(index)?.offsetWidth || 48;

    setLeft(left);
    setWidth(width);
  };

  useLayoutEffect(() => {
    const map = getMap();
    const left = map.get(0)?.offsetLeft || 0;
    const width = map.get(0)?.offsetWidth || 48;

    setLeft(left);
    setWidth(width);
  }, []);

  console.log({ width });

  return { tabIndex, left, width, onSwitch: handleSwitch, setItemRef };
};

export default useTabs;
