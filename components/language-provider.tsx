"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "uz"

type Translations = {
  [key: string]: {
    en: string
    uz: string
  }
}

const translations: Translations = {
  destinations: {
    en: "Destinations",
    uz: "Yo'nalishlar",
  },
  hotels: {
    en: "Hotels",
    uz: "Mehmonxonalar",
  },
  flights: {
    en: "Flights",
    uz: "Parvozlar",
  },
  bookings: {
    en: "Bookings",
    uz: "Bron qilish",
  },
  login: {
    en: "Login",
    uz: "Kirish",
  },
  signup: {
    en: "Sign up",
    uz: "Ro'yxatdan o'tish",
  },
  bestDestinations: {
    en: "BEST DESTINATIONS AROUND THE WORLD",
    uz: "DUNYODAGI ENG YAXSHI YO'NALISHLAR",
  },
  travelEnjoy: {
    en: "Travel, enjoy",
    uz: "Sayohat qiling, rohatlaning",
  },
  andLive: {
    en: "and live a new",
    uz: "va yangi hayot",
  },
  fullLife: {
    en: "and full life",
    uz: "to'liq hayot kechiring",
  },
  description: {
    en: "Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.",
    uz: "Wicket uzoqroq hayratda qoldiradigan barton nafsoniyatini o'zida qiladi. Sportchilarga afzal ko'riladi, u tinglab berdi. Park darvozasi ular g'arbni qattiq sotadilar.",
  },
  findMore: {
    en: "Find out more",
    uz: "Ko'proq ma'lumot",
  },
  playDemo: {
    en: "Play Demo",
    uz: "Namoyishni o'ynash",
  },
  // Services section translations
  category: {
    en: "CATEGORY",
    uz: "KATEGORIYA",
  },
  weOfferBestServices: {
    en: "We Offer Best Services",
    uz: "Biz eng yaxshi xizmatlarni taklif qilamiz",
  },
  calculatedWeather: {
    en: "Calculated Weather",
    uz: "Hisoblangan ob-havo",
  },
  weatherDescription: {
    en: "Built Wicket longer admire do barton vanity itself do in it.",
    uz: "Wicket uzoqroq hayratda qoldiradigan barton nafsoniyatini o'zida qiladi.",
  },
  bestFlights: {
    en: "Best Flights",
    uz: "Eng yaxshi parvozlar",
  },
  flightsDescription: {
    en: "Engrossed listening. Park gate sell they west hard for the.",
    uz: "Tinglab berdi. Park darvozasi ular g'arbni qattiq sotadilar.",
  },
  localEvents: {
    en: "Local Events",
    uz: "Mahalliy tadbirlar",
  },
  eventsDescription: {
    en: "Barton vanity itself do in it. Preferd to men it engrossed listening.",
    uz: "Barton nafsoniyatini o'zida qiladi. Erkaklarga afzal ko'riladi, u tinglab berdi.",
  },
  customization: {
    en: "Customization",
    uz: "Moslashuvchanlik",
  },
  customizationDescription: {
    en: "We deliver outsourced aviation services for military customers",
    uz: "Biz harbiy mijozlar uchun tashqi aviatsiya xizmatlarini yetkazib beramiz",
  },
  // Top destinations section translations
  topSelling: {
    en: "Top Selling",
    uz: "Eng ko'p sotiladigan",
  },
  topDestinations: {
    en: "Top Destinations",
    uz: "Eng yaxshi yo'nalishlar",
  },
  daysTrip: {
    en: "Days Trip",
    uz: "Kunlik sayohat",
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language]
    }
    return key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
