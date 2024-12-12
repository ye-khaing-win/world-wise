import classNames from "classnames";
import AsideToggleButton from "./AsideToggleButton";
import { NAV } from "./config";
import useSettings from "../hooks/useSettings";
import { FC, ReactNode } from "react";

interface IAsideProps {
  children: ReactNode;
}

const Aside: FC<IAsideProps> = (props) => {
  const { children } = props;
  const { isAsideCollapsed } = useSettings();

  return (
    <aside
      className={classNames(
        "fixed bottom-0 top-0 z-20",
        "border-r  border-red-500",
        "transition-all duration-300 ease-in-out",
        {
          [NAV.WIDTH]: !isAsideCollapsed,
          [NAV.WIDTH_COLLAPSED]: isAsideCollapsed,
        }
      )}
    >
      <AsideToggleButton />
      {children}
    </aside>
  );
};

export default Aside;
