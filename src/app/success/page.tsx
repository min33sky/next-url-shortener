'use client';

import useBaseStore from '@/store/useBaseStore';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';

export default function SuccessPage() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [clicked, setClicked] = useState(false);
  const { shortLink } = useBaseStore((state) => ({
    shortLink: state.shortLink,
  }));

  const copyToClipboard = useCallback(() => {
    setClicked(true);
    navigator.clipboard.writeText(shortLink);
  }, [shortLink]);

  const Icon = clicked ? ClipboardDocumentCheckIcon : ClipboardDocumentIcon;

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      const { innerWidth, innerHeight } = window;
      setWidth(innerWidth - 20);
      setHeight(innerHeight - 20);
    });

    observer.observe(window.document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex h-full items-center justify-center overflow-hidden">
      <div className="flex flex-col space-y-4 rounded-lg bg-slate-100 px-10 py-6 text-slate-700 shadow-2xl">
        <h1 className="text-center text-lg font-bold">
          URL이 성공적으로 줄여졌습니다.
        </h1>
        <p className="text-xl font-bold text-indigo-800">{shortLink}</p>
        <button
          aria-label="copy to clipboard"
          onClick={copyToClipboard}
          className="rounded-md bg-indigo-800 py-3 text-slate-100 transition hover:bg-indigo-900"
        >
          <Icon
            className={`mr-2 inline-block h-5 w-5 ${
              clicked ? 'text-emerald-300' : ''
            }`}
          />
          클립보드에 복사하기
        </button>
        <Link
          aria-label="go to home"
          href="/"
          className="w-full rounded-md bg-slate-200 py-3 text-center text-slate-800 transition hover:bg-slate-300"
        >
          <ArrowLeftOnRectangleIcon className="mr-2 inline-block h-5 w-5" />
          홈으로 돌아가기
        </Link>
      </div>
      <Confetti
        numberOfPieces={300}
        recycle={false}
        width={width}
        height={height}
      />
    </div>
  );
}
