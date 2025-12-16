export type Lang = 'en' | 'ar'

export const t = {
  en: {
    nav: { home: 'Home', services: 'Services', pricing: 'Pricing', contact: 'Contact' },
    hero: {
      title: 'Web & App Development in Kuwait',
      text: 'I design and build professional websites, web applications, and mobile apps for businesses in Kuwait.',
      quote: 'Get a Free Quote',
      whatsapp: 'WhatsApp',
    },
  },
  ar: {
    nav: { home: 'الرئيسية', services: 'الخدمات', pricing: 'الباقات', contact: 'تواصل' },
    hero: {
      title: 'تطوير مواقع وتطبيقات في الكويت',
      text: 'أصمم وأطوّر مواقع إلكترونية وتطبيقات ويب وتطبيقات جوال للشركات في الكويت.',
      quote: 'احصل على عرض سعر',
      whatsapp: 'واتساب',
    },
  },
} as const
