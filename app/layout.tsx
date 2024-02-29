import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='bg-black'>
      <body className={`${inter.className} antialiased text-white`}>{children}</body>
    </html>
  );
}
