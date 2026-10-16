import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    answer: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

// İngilizce blog: her yazının `tr` alanı Türkçe karşılığının adresidir (dil seçici ve hreflang için).
const blogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog-en' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    answer: z.string(),
    date: z.coerce.date(),
    tr: z.string().optional(),
    updated: z.coerce.date().optional(),
    draft: z.boolean().default(true),
    faqs: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }),
});

export const collections = { blog, blogEn };
