import { useEffect } from 'react';
import { SettingsProvider } from './contexts/settingsContext';
import Router from './routes';
import { initTWE, Ripple } from 'tw-elements';

const App = () => {
  useEffect(() => {
    initTWE({ Ripple });
  });

  return (
    <SettingsProvider>
      <Router />
    </SettingsProvider>
  );
};

export default App;
