import { ReactNode } from 'react';
import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreProvider from '@/components/StoreProvider';
import { APP_TITLE } from '@/lib/const';
import './styles.css';

export const metadata: Metadata = {
  title: APP_TITLE,
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
