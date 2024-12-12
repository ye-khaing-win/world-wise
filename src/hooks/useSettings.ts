import { useContext } from "react";
import SettingsContext from "../contexts/settingsContext";

const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(
      "useSettings must be used inside SettingsProvider."
    );
  }

  return context;
};

export default useSettings;
