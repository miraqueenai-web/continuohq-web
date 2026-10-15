// Yapay zeka arama motorları için sitenin özet haritası (llmstxt.org biçimi).
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { site } from '../config/site';
import { groups, services, sectors, serviceUrl, sectorUrl } from '../data/services';

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const line = (title: string, path: string, note: string) => `- [${title}](${site.url}${path}): ${note}`;
  const body = [
    `# Continuo`,
    ``,
    `> ${site.description}`,
    ``,
    `Continuo Türkiye genelinde, uzaktan hizmet veren bir yapay zeka ajansıdır. Her asistanda insana devir bulunur; kurulumlar KVKK'ya uygun kurgulanır. Kurucusu ${site.founder}'dır. İletişim: ${site.email.info}`,
    ``,
    `## ${groups['ai-asistanlar'].title}`,
    line(groups['ai-asistanlar'].title, '/ai-asistanlar', groups['ai-asistanlar'].answer),
    ...services.filter((s) => s.group === 'ai-asistanlar').map((s) => line(s.title, serviceUrl(s), s.answer)),
    ``,
    `## ${groups['ai-donusumu'].title}`,
    line(groups['ai-donusumu'].title, '/ai-donusumu', groups['ai-donusumu'].answer),
    ...services.filter((s) => s.group === 'ai-donusumu').map((s) => line(s.title, serviceUrl(s), s.answer)),
    ``,
    `## Sektörler`,
    ...sectors.map((s) => line(s.title, sectorUrl(s), s.answer)),
    ``,
    `## Blog`,
    ...posts.map((p) => line(p.data.title, `/blog/${p.id}`, p.data.answer ?? p.data.description)),
    ``,
    `## Kurumsal`,
    line('Nasıl Çalışırız', '/nasil-calisiriz', 'Keşif, kurgu, kurulum ve ölçüm aşamalarından oluşan çalışma yöntemi ve ücretlendirme modeli.'),
    line('Randevu', '/randevu', '30 dakikalık ücretsiz, çevrim içi keşif görüşmesi planlama sayfası.'),
    line('Hakkımızda', '/hakkimizda', 'Continuo\'nun kuruluş amacı ve ilkeleri.'),
    line('İletişim', '/iletisim', 'İletişim formu ve e-posta adresleri.'),
    line(site.founder, '/yazar/neslisah-gokkaya', 'Continuo kurucusu; sitedeki rehber ve blog yazılarının yazarı.'),
    ``,
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
