import { LandingPage } from './pages/LandingPage';
import { LanguageProvider } from './i18n/LanguageContext';

export function App() {
  return (
    <LanguageProvider>
      <LandingPage />
    </LanguageProvider>
  );
}