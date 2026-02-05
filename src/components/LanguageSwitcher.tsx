import { useLanguage } from '../i18n/useLanguage';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'en'
            ? 'bg-teal-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}>
        EN
      </button>
      <button
        onClick={() => setLanguage('pt-br')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          language === 'pt-br'
            ? 'bg-teal-500 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}>
        PT
      </button>
    </div>
  );
}
