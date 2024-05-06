import { defaultFont } from './fonts';
import './globals.scss';

export const metadata = {
  title: 'Étienne Robert',
  description: "Étienne Robert's personal website",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        defaultFont.className,
        'h-full',
        'bg-stone-50 text-stone-900',
        'dark:bg-stone-900 dark:text-stone-50',
      ].join(' ')}
    >
      <body className="h-full">{children}</body>
    </html>
  );
}
