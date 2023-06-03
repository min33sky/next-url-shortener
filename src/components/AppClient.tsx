'use client';

import Divider from '@/components/Divider';
import getBaseUrl from '@/libs/getBaseUrl';
import { LinkIcon, SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';

export default function AppClient() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const getRandomeShortUrl = useCallback(() => {
    setShortUrl(nanoid(10));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!originalUrl || !shortUrl) {
        return;
      }

      /**
       * TODO: 아래 코드를 AppWrite의 API를 호출하는 것으로 변경한다..
       */

      const data = await fetch('/api/set-url', {
        method: 'POST',
        body: JSON.stringify({
          originalUrl,
          shortUrl,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());

      console.log('data: ', data);

      setOriginalUrl('');
      setShortUrl('');
    },
    [originalUrl, shortUrl],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-11/12 max-w-xl flex-col space-y-5 rounded-lg bg-white px-3 py-5 shadow-2xl"
    >
      <header className="space-y-4">
        <h1 className="text-center text-lg font-bold">URL 줄이기</h1>
        <div className="flex items-center space-x-2 text-rose-500">
          <SpeakerWaveIcon className="inline-block h-5 w-5" />
          <span>긴 URL을 짧게 줄여주는 서비스입니다.</span>
        </div>
      </header>

      <Divider />

      <div className="space-y-2">
        <label htmlFor="originalUrl" className="font-bold">
          원본 URL
        </label>
        <div className="flex items-center space-x-2">
          <LinkIcon className="inline-block h-5 w-5" />
          <input
            id="originalUrl"
            type="text"
            className="flex-1 border-b-2 text-lg outline-none"
            placeholder="원본 URL을 입력하세요."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </div>
      </div>

      {/* <Divider /> */}

      <div className="space-y-2">
        <label htmlFor="shortUrl" className="font-bold">
          짧은 URL
        </label>
        <div className="flex flex-col items-start">
          <p className="space-x-2 text-lg font-bold">
            <LinkIcon className="inline-block h-5 w-5" />
            <span>{getBaseUrl()}</span>
          </p>
          <div className="flex w-full items-center space-x-2">
            <input
              id="shortUrl"
              type="text"
              className="flex-1 border-b-2 bg-transparent text-lg outline-none"
              placeholder="원하는 URL을 입력하세요."
              value={shortUrl}
              onChange={(e) => setShortUrl(e.target.value)}
            />
            <button
              type="button"
              onClick={getRandomeShortUrl}
              className="rounded-md bg-slate-700 px-3 py-2 text-white transition hover:bg-slate-900"
            >
              랜덤
            </button>
          </div>
        </div>
      </div>

      <Divider />

      <button className="w-full rounded-md bg-slate-700 py-3 text-white transition hover:bg-slate-900">
        등록
      </button>
    </form>
  );
}
