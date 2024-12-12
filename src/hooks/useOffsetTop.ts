import { useEffect, useMemo, useState } from "react";

const useOffsetTop = (top: number = 100): boolean => {
  const [value, setValue] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > top) {
        console.log(window.scrollY, top);
        setValue(true);
      } else {
        setValue(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [top, value]);

  return useMemo(() => value, [value]);
};

export default useOffsetTop;
