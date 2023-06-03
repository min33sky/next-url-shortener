import { z } from 'zod';

const environmentSchema = z.object({
  APPWRITE_PROJECT_ID: z.string(),
  APPWRITE_ENDPOINT: z.string(),
  APPWRITE_DATABASE_ID: z.string(),
  APPWRITE_SHORT_LINK_COLLECTION_ID: z.string(),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof environmentSchema> {}
  }
}
