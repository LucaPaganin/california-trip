'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const navItems = [
  { href: '/map',         icon: '📍', label: 'Mappa' },
  { href: '/tappe',       icon: '📅', label: 'Tappe' },
  { href: '/consigli',    icon: '🧭', label: 'Consigli' },
  { href: '/alloggi',     icon: '🏨', label: 'Alloggi' },
  { href: '/geopolitica', icon: '🌐', label: 'Geopolitica' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.flag}>🇺🇸</div>
        <div className={styles.title}>West Coast<br />Roadtrip</div>
        <div className={styles.sub}>16 giorni · Ottobre 2026</div>
      </div>

      <nav className={styles.nav}>
        {navItems.map(({ href, icon, label }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.link} ${active ? styles.active : ''}`}
            >
              <span className={styles.icon}>{icon}</span>
              {label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        Partenza MXP · 1 ottobre 2026<br />
        4 persone · ~€4.500/persona<br />
        Itinerario ottimizzato 2026
      </div>
    </div>
  );
}
