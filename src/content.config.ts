import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      slug: z.string(),
      cover: image(),
      status: z.enum(["draft", "published"]),
      language: z.enum(["es", "en"]),
      translation: z.object({
        es: z.string().optional(),
        en: z.string().optional(),
      }),
    }),
});

export const collections = { posts };
