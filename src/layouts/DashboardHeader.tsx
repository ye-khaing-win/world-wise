import classNames from "classnames";
import { FC, ReactNode } from "react";
import { HEADER } from "./config";
import useOffsetTop from "../hooks/useOffsetTop";

interface IDashboardHeaderProps {
  children: ReactNode;
}

const DashboardHeader: FC<IDashboardHeaderProps> = (
  props
) => {
  const { children } = props;

  const isOffsetTop = useOffsetTop();

  return (
    <header
      className={classNames(
        // MOBILE
        "sticky top-0 z-100",
        "border-b border-blue-500",
        "bg-white/75",
        "backdrop-blur-md",
        "transition-all duration-300 ease-in-out",
        [HEADER.HEIGHT_MOBILE],
        // DESKTOP

        {
          [HEADER.HEIGHT_DESKTOP_OFFSET]: isOffsetTop,
          [HEADER.HEIGHT_DESKTOP]: !isOffsetTop,
        }
      )}
    >
      {children}
    </header>
  );
};

export default DashboardHeader;
