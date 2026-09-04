// src/i18n/utils.ts
// Utility functions following Astro's i18n recipes & best practices

import { ui, defaultLang, languages, type Lang } from './ui';

/**
 * Extracts language code from the current URL pathname
 */
export function getLangFromUrl(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  const maybeLang = segments[0] as Lang;
  if (maybeLang && maybeLang in languages) {
    return maybeLang;
  }
  return defaultLang;
}

/**
 * Returns a translation helper t(key) for a given language
 */
export function useTranslations(lang: Lang) {
  const currentLang = lang in ui ? lang : defaultLang;
  const currentDict = ui[currentLang] as Record<string, string>;
  const defaultDict = ui[defaultLang] as Record<string, string>;

  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    if (key in currentDict && currentDict[key]) {
      return currentDict[key];
    }
    return defaultDict[key] || (key as string);
  };
}

/**
 * Returns a function to localize any internal link
 */
export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, targetLang: Lang = lang): string {
    // Strip leading and trailing slashes for clean normalization
    const cleanSegments = path.split('/').filter(Boolean);

    // If first segment is an existing language code, strip it
    if (cleanSegments.length > 0 && cleanSegments[0] in languages) {
      cleanSegments.shift();
    }

    const cleanPath = cleanSegments.length > 0 ? `/${cleanSegments.join('/')}` : '';

    if (targetLang === defaultLang) {
      return cleanPath || '/';
    }

    return `/${targetLang}${cleanPath}`;
  };
}

export interface HreflangLink {
  lang: string;
  href: string;
}

/**
 * Generates canonical alternate hreflang links for SEO across all 8 languages + x-default
 */
export function getHreflangLinks(pathname: string, siteBase: string = 'https://engineerguide.com'): HreflangLink[] {
  const cleanSegments = pathname.split('/').filter(Boolean);

  // Strip current locale prefix if present
  if (cleanSegments.length > 0 && cleanSegments[0] in languages) {
    cleanSegments.shift();
  }

  const cleanPath = cleanSegments.length > 0 ? `/${cleanSegments.join('/')}` : '';

  const links: HreflangLink[] = Object.keys(languages).map((loc) => {
    const isDefault = loc === defaultLang;
    const urlPath = isDefault ? (cleanPath || '/') : `/${loc}${cleanPath}`;
    return {
      lang: loc,
      href: `${siteBase}${urlPath}`,
    };
  });

  // x-default points to default language (English)
  links.push({
    lang: 'x-default',
    href: `${siteBase}${cleanPath || '/'}`,
  });

  return links;
}
