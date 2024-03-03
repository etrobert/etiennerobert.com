import { defaultFont } from './fonts';
import 'styles/globals.scss';

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
    <html lang="en" className={defaultFont.className}>
      <body>{children}</body>
    </html>
  );
}
