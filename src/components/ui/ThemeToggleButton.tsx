'use client';

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

/**
 * 테마를 변경하는 버튼
 */
export default function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <button aria-label="Theme Toggle Button" onClick={toggleTheme}>
        <div className="relative  h-6 w-12 rounded-full border border-slate-400 bg-slate-200 shadow-inner">
          <div
            className={`absolute left-0 top-0 flex h-6 w-6 scale-150 items-center justify-center rounded-full  transition-all duration-300 ease-in-out ${
              resolvedTheme === 'dark'
                ? 'translate-x-full transform bg-slate-700'
                : 'bg-yellow-500'
            }`}
          >
            {resolvedTheme === 'dark' ? (
              <MoonIcon className="h-4 w-4  text-yellow-500" />
            ) : (
              <SunIcon className="h-4 w-4  text-white" />
            )}
          </div>
        </div>
      </button>
    </>
  );
}
