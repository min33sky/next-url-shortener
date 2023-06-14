'use client';

import Divider from '@/components/Divider';
import getBaseUrl from '@/utils/getBaseUrl';
import {
  LinkIcon,
  ScissorsIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline';
import { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createDocument, existsBySlug } from '@/libs/appwrite';
import { nanoid } from 'nanoid';
import useBaseStore from '@/store/useBaseStore';
import { toast } from 'react-hot-toast';
import { urlSchema } from '@/utils/schema';
import { z } from 'zod';

export default function AppClient() {
  const router = useRouter();
  const { loading, setLoading, setShortLink } = useBaseStore((state) => ({
    loading: state.loading,
    setLoading: state.setLoading,
    setShortLink: state.setShortLink,
  }));

  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const originalUrlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!originalUrl) return;

      try {
        setLoading(true);

        //? URL 유효성 검사
        urlSchema.parse(originalUrl);

        const slug = shortUrl || nanoid(10);
        const exists = await existsBySlug(shortUrl);

        if (exists) return toast.error('중복되는 짧은 주소가 존재합니다.');

        await createDocument({ url: originalUrl, slug });
        setShortLink(`${getBaseUrl()}/${slug}`);
        router.push('/success');
      } catch (error: any) {
        if (error instanceof z.ZodError) {
          toast.error(error.issues[0]?.message || '에러가 발생했습니다.');
          originalUrlRef.current?.focus();
        } else {
          toast.error(error?.message || '에러가 발생했습니다.');
        }
      } finally {
        setLoading(false);
      }
    },
    [originalUrl, router, setLoading, setShortLink, shortUrl],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-11/12 max-w-xl flex-col space-y-5 rounded-lg bg-white px-3 py-5 text-slate-700 shadow-2xl"
    >
      <header className="space-y-4">
        <h1 className="text-center text-lg font-bold ">
          <ScissorsIcon className="mr-2 inline-block h-5 w-5 animate-bounce" />
          URL 싹둑이
        </h1>
        <div className="flex items-center space-x-2 font-bold text-rose-500">
          <SpeakerWaveIcon className="inline-block h-5 w-5 animate-pulse" />
          <span>긴 URL을 짧게 줄여주는 서비스입니다.</span>
        </div>
      </header>

      <Divider />

      <div className="space-y-2">
        <label htmlFor="originalUrl" className="font-bold">
          원본 URL <span className="text-rose-500">(필수)</span>
        </label>
        <div className="flex items-center space-x-2">
          <LinkIcon className="inline-block h-5 w-5" />
          <input
            ref={originalUrlRef}
            id="originalUrl"
            type="text"
            className="flex-1 border-b-2 bg-transparent text-lg outline-none"
            placeholder="예) https://google.com"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="shortUrl" className="font-bold">
          짧은 URL <span className="text-slate-400">(선택)</span>
        </label>
        <div className="flex items-center space-x-2">
          <p className="flex-shrink-0 space-x-2 text-lg font-bold">
            <LinkIcon className="inline-block h-5 w-5" />
            <span>{getBaseUrl()}/</span>
          </p>
          <input
            id="shortUrl"
            type="text"
            className="w-full border-b-2 bg-transparent text-lg outline-none"
            placeholder="예) abc123"
            value={shortUrl}
            onChange={(e) => setShortUrl(e.target.value)}
          />
        </div>
      </div>

      <Divider />

      <button
        disabled={loading}
        className="w-full rounded-md bg-slate-700 py-3 tracking-widest text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        {loading ? '로딩 중...' : 'URL 자르기'}
      </button>
    </form>
  );
}
