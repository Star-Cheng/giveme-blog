import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    series: z.object({
      name: z.string(),
      order: z.number(),
    }).optional(),
    draft: z.boolean().optional().default(false),
    author: z.string().optional().default('Star Cheng'),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { blog };