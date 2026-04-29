import { defineCollection, z } from 'astro:content';

const releases = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    version: z.string().optional(),
    badge: z.enum(['Feature', 'Improvement', 'Fix', 'Announcement']).optional(),
  }),
});

export const collections = {
  releases,
};
