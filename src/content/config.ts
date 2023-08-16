import { z, defineCollection } from 'astro:content'

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stack: z.array(z.string()),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    highlights: z.string(),
  }),
})

export const collections = {
  projects: projectCollection,
}
