export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.work': 'Proyectos',
    'nav.services': 'Servicios',
    'nav.about': 'Sobre nosotros',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Proyectamos lo que todavía no se ve',
    'hero.title': 'Haz ruido',
    'hero.cta': 'Ver portfolio',
    'about.title': 'Construimos mundos visuales',
    'about.body':
      'N28PROJECT impulsa la identidad visual de artistas y marcas a través de piezas audiovisuales con narrativa, estilo y dirección cinematográfica. Tratamos cada historia como si fuera la nuestra.',
    'work.title': 'Proyectos',
    'services.title': 'Servicios',
    'services.list': [
      'Videobooks',
      'Selftapes',
      'Imagen audiovisual',
      'Videoclips',
      'Piezas publicitarias',
      'Dirección creación audiovisual',
    ],
    'cta.title': '¿Creamos algo juntos?',
    'footer.city': 'Madrid',
    'footer.follow': 'Síguenos',
    'meta.title': 'N28PROJECT — Productora audiovisual en Madrid',
    'meta.description':
      'Productora audiovisual en Madrid. Videobooks, selftapes, videoclips, publicidad y dirección creativa para artistas y marcas.',
  },
  en: {
    'nav.work': 'Work',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.eyebrow': "We shape what isn't visible yet",
    'hero.title': 'Make noise',
    'hero.cta': 'View portfolio',
    'about.title': 'We build visual worlds',
    'about.body':
      'N28PROJECT builds the visual identity of artists and brands through audiovisual pieces with narrative, style and cinematic direction. We treat every story as if it were our own.',
    'work.title': 'Work',
    'services.title': 'Services',
    'services.list': [
      'Videobooks',
      'Selftapes',
      'Audiovisual identity',
      'Music videos',
      'Advertising',
      'Creative direction',
    ],
    'cta.title': "Let's tell your story",
    'footer.city': 'Madrid',
    'footer.follow': 'Follow us',
    'meta.title': 'N28PROJECT — Audiovisual production house in Madrid',
    'meta.description':
      'Audiovisual production in Madrid. Videobooks, selftapes, music videos, ads and creative direction for artists and brands.',
  },
} as const;

export type UIKey = keyof typeof ui.es;

export function useTranslations(lang: Lang) {
  return function t<K extends UIKey>(key: K): (typeof ui)[Lang][K] {
    return (ui[lang] as (typeof ui)[Lang])[key];
  };
}
