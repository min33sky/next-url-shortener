import AppClient from '@/components/AppClient';
import { databases } from '@/libs/appwrite';

export default async function Home() {
  const data = await databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
  );

  console.log('data: ', data);

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <AppClient />
    </main>
  );
}
