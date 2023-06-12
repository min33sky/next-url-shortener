'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
