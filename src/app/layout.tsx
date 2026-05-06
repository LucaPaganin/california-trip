import type { Metadata } from 'next';
import Sidebar from '@/components/layout/Sidebar';
import SmoothScroll from '@/components/layout/SmoothScroll';
import './globals.css';

export const metadata: Metadata = {
  title: '🇺🇸 West Coast Roadtrip — Ottobre 2026',
  description: 'Itinerario ottimizzato 16 giorni, 4 persone, Ottobre 2026',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body>
        <Sidebar />
        <SmoothScroll />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
