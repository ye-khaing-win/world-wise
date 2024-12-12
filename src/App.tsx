import { SettingsProvider } from "./contexts/settingsContext";
import Router from "./routes";

const App = () => {
  return (
    <SettingsProvider>
      <Router />
    </SettingsProvider>
  );
};

export default App;
