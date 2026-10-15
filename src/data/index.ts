// Dile göre veri: Türkçe (src/data/services.ts, guides.ts) ve İngilizce (src/data/en/*).
import type { Lang } from '../i18n';
import * as trData from './services';
import { guides as trGuides } from './guides';
import * as enData from './en/services';
import { guides as enGuides } from './en/guides';
import type { Service, Sector } from './services';

const groupPath = { tr: { 'ai-asistanlar': '/ai-asistanlar', 'ai-donusumu': '/ai-donusumu' }, en: { 'ai-asistanlar': '/en/ai-assistants', 'ai-donusumu': '/en/ai-transformation' } } as const;
const sectorsPath = { tr: '/sektorler', en: '/en/industries' } as const;

export function data(lang: Lang) {
  const src = lang === 'en' ? enData : trData;
  const services: Service[] = src.services;
  const sectors: Sector[] = src.sectors;
  return {
    lang,
    groups: src.groups,
    services,
    sectors,
    guides: lang === 'en' ? enGuides : trGuides,
    groupUrl: (g: 'ai-asistanlar' | 'ai-donusumu') => groupPath[lang][g],
    sectorsUrl: sectorsPath[lang],
    serviceUrl: (s: Service) => `${groupPath[lang][s.group]}/${s.slug}`,
    sectorUrl: (s: Sector) => `${sectorsPath[lang]}/${s.slug}`,
    serviceBySlug: (slug: string) => services.find((s) => s.slug === slug),
    sectorBySlug: (slug: string) => sectors.find((s) => s.slug === slug),
  };
}
