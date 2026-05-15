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
                    aboutUs: "About Us",
                    quote: "Get a Quote",

                    fast: "Fast",
                    professional: "Professional",
                    modern: "Modern",

                    title1: "We Build Fast &",
                    title2: "Professional",

                    viewWork: "View Our Work",

                    projects: "Projects",
                    quality: "Quality",
                    support: "Support",
                    whatOffer: "What We Offer",
                    ourServices: "Our Services",
                    servicesDesc: "We build modern, fast and professional websites tailored to your business needs.",

                    landingTitle: "Landing Pages",
                    landingDesc: "High-converting single-page websites designed to attract and turn visitors into customers.",

                    startupTitle: "Startup & Corporate",
                    startupDesc: "Modern multi-page websites for startups and companies to establish a strong online presence.",

                    restaurantTitle: "Restaurant & Cafe",
                    restaurantDesc: "Stylish websites for restaurants and cafes with menu, location and reservation features.",

                    portfolioTitle: "Portfolio Sites",
                    portfolioDesc: "Personal portfolio websites for doctors, lawyers, bloggers and creative professionals.",

                    educationTitle: "Educational Centers",
                    educationDesc: "Professional websites for schools, courses and educational centers with course listings.",

                    corporateTitle: "Corporate Websites",
                    corporateDesc: "Full-featured corporate websites with multiple pages, team section and contact forms.",

                    fromPrice: "From $***",
                    footerTitle: "Ready to start your project?",

                    footerDesc:
                        "Contact us today — get a free consultation!",

                    footerBtn: "Get Free Quote",

                    footerStudioDesc:
                        "Professional web studio building modern, fast and beautiful websites for businesses worldwide.",

                    footerQuote:
                        '"We launch businesses into the web 🚀"',

                    company: "Company",

                    contact: "Contact",

                    rights: "All rights reserved.",

                    madeWith: "Made with ",

                    madeIn: " in Samarkand, Uzbekistan",
                }
            },

            uz: {
                translation: {
                    home: "Bosh sahifa",
                    services: "Xizmatlar",
                    portfolio: "Bajarilgan ishlar",
                    pricing: "Narxlar",
                    aboutUs: "Biz haqimizda",
                    quote: "Narx so'rash",

                    fast: "Tezkor",
                    professional: "Professional",
                    modern: "Zamonaviy",

                    title1: "Biz Tezkor va",
                    title2: "Professional",

                    viewWork: "Ishlarimizni Ko'rish",

                    projects: "Loyihalar",
                    quality: "Sifat",
                    support: "Yordam",
                    whatOffer: "Biz Nimalarni Taklif Qilamiz",
                    ourServices: "Xizmatlarimiz",
                    servicesDesc: "Biz biznesingiz uchun zamonaviy, tezkor va professional websaytlar yaratamiz.",

                    landingTitle: "Landing Pagelar",
                    landingDesc: "Mijozlarni jalb qiluvchi va sotuvni oshiruvchi bir sahifalik websaytlar.",

                    startupTitle: "Startup va Korporativ",
                    startupDesc: "Startup va kompaniyalar uchun zamonaviy ko'p sahifali websaytlar.",

                    restaurantTitle: "Restoran va Kafe",
                    restaurantDesc: "Menu, lokatsiya va bron qilish tizimiga ega restoran websaytlari.",

                    portfolioTitle: "Portfolio Saytlar",
                    portfolioDesc: "Doktorlar, blogerlar va kreativ mutaxassislar uchun portfolio saytlar.",

                    educationTitle: "O'quv Markazlari",
                    educationDesc: "Kurslar va ta'lim markazlari uchun professional websaytlar.",

                    corporateTitle: "Korporativ Saytlar",
                    corporateDesc: "Ko'p sahifali va professional korporativ websaytlar.",

                    fromPrice: "$*** dan boshlab",
                    footerTitle: "Loyihangizni boshlashga tayyormisiz?",

                    footerDesc:
                        "Bugunoq biz bilan bog'laning — bepul konsultatsiya oling!",

                    footerBtn: "Bepul Narx Olish",

                    footerStudioDesc:
                        "Butun dunyo bizneslari uchun zamonaviy, tezkor va chiroyli websaytlar yaratuvchi professional web studio.",

                    footerQuote:
                        '"Biz bizneslarni internetga olib chiqamiz 🚀"',

                    company: "Kompaniya",

                    contact: "Aloqa",

                    rights: "Barcha huquqlar himoyalangan.",

                    madeWith: "❤️ bilan yaratildi ",

                    madeIn: " Samarqand, O'zbekistonda",
                }
            }
        }
    })

export default i18n