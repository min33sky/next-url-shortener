import { databases } from '@/libs/appwrite';
import getBaseUrl from '@/libs/getBaseUrl';
import { LinkIcon } from '@heroicons/react/24/outline';

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
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex w-11/12 max-w-xl flex-col space-y-5 rounded-lg bg-white px-3 py-4 shadow-lg">
        <header>
          <h1 className="text-center text-lg font-bold">URL 줄이기</h1>
        </header>

        <div className="mx-auto h-[1px] w-11/12 bg-slate-300" />

        <div className="flex items-center space-x-2">
          <LinkIcon className="inline-block h-5 w-5" />
          <input
            type="text"
            className="flex-1 text-lg outline-none"
            placeholder="원본 URL을 입력하세요."
          />
        </div>

        <div className="mx-auto h-[1px] w-11/12 bg-slate-300" />

        <div className="flex flex-col items-start space-y-4">
          <p className="text-lg font-bold">{getBaseUrl()}</p>
          <div className="flex w-full items-center space-x-2">
            <input
              type="text"
              className="flex-1 border-b-2 bg-transparent text-lg outline-none"
              placeholder="원하는 URL을 입력하세요."
            />
            <button className="rounded-md bg-slate-700 px-3 py-2 text-white transition hover:bg-slate-900">
              랜덤
            </button>
          </div>
        </div>

        <div className="mx-auto h-[1px] w-11/12 bg-slate-300" />

        <button className="w-full rounded-md bg-slate-700 py-3 text-white transition hover:bg-slate-900">
          등록
        </button>
      </div>
    </main>
  );
}
