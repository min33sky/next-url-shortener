import { databases } from '@/libs/appwrite';

export default async function Home() {
  const data = await databases.listDocuments(
    process.env.APPWRITE_DATABASE_ID,
    process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
  );

  console.log(
    'process.env.APPWRITE_DATABASE_ID: ',
    process.env.APPWRITE_DATABASE_ID,
  );
  console.log(
    'process.env.APPWRITE_SHORT_LINK_COLLECTION_ID: ',
    process.env.APPWRITE_SHORT_LINK_COLLECTION_ID,
  );

  console.log('data: ', data);

  return (
    <main>
      <h1 className="text-4xl text-blue-500">안녕하세요... </h1>
    </main>
  );
}
