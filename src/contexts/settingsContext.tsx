import {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

interface ISettingsContextProps {
  isAsideCollapsed: boolean;
  onToggleAside: () => void;
}

const SettingsContext =
  createContext<ISettingsContextProps>(
    {} as ISettingsContextProps
  );

interface ISettingsProviderProps {
  children: ReactNode;
}
export const SettingsProvider: FC<
  ISettingsProviderProps
> = (props) => {
  const { children } = props;

  const [isAsideCollapsed, setIsAsideCollapsed] =
    useState<boolean>(false);

  const handleToggleAside = useCallback(() => {
    setIsAsideCollapsed((prev) => !prev);
  }, []);

  const value: ISettingsContextProps = useMemo(
    () => ({
      isAsideCollapsed,
      onToggleAside: handleToggleAside,
    }),
    [isAsideCollapsed, handleToggleAside]
  );

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
