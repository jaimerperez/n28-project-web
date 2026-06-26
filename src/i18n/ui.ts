export const languages = {
  es: 'ES',
  en: 'EN',
} as const;

export const defaultLang = 'es' as const;

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'nav.home': 'Inicio',
    'nav.work': 'Proyectos',
    'nav.team': 'Equipo',
    'nav.contact': 'Contacto',

    'hero.eyebrow': 'Proyectamos lo que todavía no se ve',
    'hero.cta': 'Ver portfolio',

    'about.title': 'Construimos mundos visuales',
    'about.body':
      'Construimos audiovisualmente desde una idea simple para crear el tipo de estudio que siempre quisimos encontrar. Uno que trata cada historia como si fuera la nuestra.',

    'work.title': 'Work',
    'work.claim':
      'Creamos piezas audiovisuales con carga emocional a través de vídeo, fotografía e identidad narrativa.',
    'work.empty': 'Próximamente.',

    'team.title': 'Equipo',
    'team.placeholder':
      'Sección en construcción. Aquí irá la presentación del equipo de N28PROJECT.',

    'contact.title': 'Cuéntanos tu historia',
    'contact.label': 'Contacto',
    'contact.email': 'info@n28project.com',
    'contact.city': 'Madrid',
    'contact.follow': 'Síguenos',

    'meta.title': 'N28PROJECT — Productora audiovisual en Madrid',
    'meta.description':
      'Productora audiovisual en Madrid. Videobooks, selftapes, videoclips, publicidad y dirección creativa para artistas y marcas.',
  },
  en: {
    'nav.home': 'Home',
    'nav.work': 'Work',
    'nav.team': 'Team',
    'nav.contact': 'Contact',

    'hero.eyebrow': "We shape what isn't visible yet",
    'hero.cta': 'View portfolio',

    'about.title': 'We build visual worlds',
    'about.body':
      "Audiovisually built from a simple idea to create the kind of studio we always wished we could find. One that treats every story as if it were our own.",

    'work.title': 'Work',
    'work.claim':
      'We create emotionally driven audiovisual pieces through video, photography and narrative identity.',
    'work.empty': 'Coming soon.',

    'team.title': 'Team',
    'team.placeholder':
      'Section under construction. The N28PROJECT team will be introduced here.',

    'contact.title': "Let's tell your story",
    'contact.label': 'Contact',
    'contact.email': 'info@n28project.com',
    'contact.city': 'Madrid',
    'contact.follow': 'Follow us',

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
