import ThemeToggleButton from './ui/ThemeToggleButton';

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full py-4">
      <div className="mx-auto flex w-full max-w-2xl justify-end px-4 lg:px-0">
        {/* 테마 버튼 */}
        <ThemeToggleButton />
      </div>
    </header>
  );
}
