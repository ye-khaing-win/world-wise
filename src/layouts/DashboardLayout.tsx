import { FC, ReactNode } from "react";
import DashboardHeader from "./DashboardHeader";
import Aside from "./Aside";
import classNames from "classnames";
import useSettings from "../hooks/useSettings";
import Logo from "../components/ui/Logo";

interface IDashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<IDashboardLayoutProps> = (
  props
) => {
  const { children } = props;

  const { isAsideCollapsed } = useSettings();

  return (
    <>
      <Aside>
        <Logo className="mt-6 ml-8 mb-2" />
      </Aside>
      <div
        className={classNames(
          {
            ["pl-[280px]"]: !isAsideCollapsed,
            ["pl-[88px]"]: isAsideCollapsed,
          },
          "transition-all duration-300 ease-in-out"
        )}
      >
        <DashboardHeader>Header</DashboardHeader>
        <main>{children}</main>
      </div>
    </>
  );
};

export default DashboardLayout;
