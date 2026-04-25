import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    home: "Home",
                    services: "Services",
                    portfolio: "Portfolio",
                    pricing: "Pricing",
                    contact: "Contact",
                    quote: "Get a Quote"
                }
            },
            uz: {
                translation: {
                    home: "Bosh sahifa",
                    services: "Xizmatlar",
                    portfolio: "Bajarilgan ishlar",
                    pricing: "Narxlar",
                    contact: "Bog'lanish",
                    quote: "Narx so'rash"
                }
            }
        }
    })

export default i18n