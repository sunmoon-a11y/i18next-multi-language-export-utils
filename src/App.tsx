import { useTranslation } from "react-i18next";
import { languages } from './i18n/helper'
import { changeLanguage } from "i18next";

const App = () => {
  const { t } = useTranslation()

  return (
    <h1>
      {languages.map((k) => (
        <button
          key={k.code}
          onClick={() => {
            void changeLanguage(k.code)
            localStorage.setItem('language', k.code)
          }}
        >
          <h1>{k.code}</h1>
        </button>
      ))}
      i18next = {t('A.a')}
    </h1>
  )
}

export default App
