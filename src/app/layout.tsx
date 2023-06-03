import './globals.css';

export const metadata = {
  title: '짧은 URL 만들기',
  description: 'Generated by min33sky',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`h-full bg-gradient-to-br from-slate-800 to-slate-700 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
