import { z } from 'zod';

const environmentSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string(),
  NEXT_PUBLIC_APPWRITE_PROJECT_ID: z.string(),
  NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string(),
  NEXT_PUBLIC_APPWRITE_DATABASE_ID: z.string(),
  NEXT_PUBLIC_APPWRITE_SHORT_LINK_COLLECTION_ID: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof environmentSchema> {}
  }
}
