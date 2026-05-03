'use client';

import { useEffect, useRef } from 'react';
import { stops } from '@/data/stops';
import { segments } from '@/data/segments';
import styles from './TripMap.module.css';

export default function TripMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    let mounted = true;

    import('leaflet').then((L) => {
      if (!mounted || !containerRef.current || mapRef.current) return;

      // inject leaflet CSS once
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      const map = L.map(containerRef.current).setView([37.5, -113.0], 6);
      mapRef.current = map;

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap © CARTO',
        maxZoom: 19,
      }).addTo(map);

      const mkIcon = (n: number) => {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="36" viewBox="0 0 30 36">
          <path d="M15 0C6.716 0 0 6.716 0 15c0 11.25 15 21 15 21s15-9.75 15-21C30 6.716 23.284 0 15 0z" fill="#f0a030" stroke="rgba(0,0,0,.4)" stroke-width="1.2"/>
          <text x="15" y="19.5" text-anchor="middle" fill="white" font-family="sans-serif" font-weight="700" font-size="11">${n}</text>
        </svg>`;
        return L.divIcon({ html: svg, className: '', iconSize: [30, 36], iconAnchor: [15, 36], tooltipAnchor: [0, -36] });
      };

      const ll: [number, number][] = [];

      stops.forEach((s) => {
        const mk = L.marker(s.coords, { icon: mkIcon(s.n) }).addTo(map);
        ll.push(s.coords);

        const pills = s.highlights.map((h) => `<span class="ct-pill">${h}</span>`).join('');
        const drive = s.driveFrom
          ? `<hr class="ct-sep"><div class="ct-drive">🚗 Da ${s.driveFrom}: <strong>${s.driveNet} netti</strong> · <strong style="color:#fb923c">${s.driveReal} reali</strong> · ${s.driveKm}</div>`
          : '';

        mk.bindTooltip(
          `<div class="ct-tip">
            <div class="ct-day">${s.day}</div>
            <div class="ct-name">${s.n}. ${s.title}</div>
            <div class="ct-temp">🌡 ${s.temp}</div>
            <div class="ct-pills">${pills}</div>
            ${drive}
          </div>`,
          { direction: 'top', sticky: false, opacity: 1, className: '' }
        );
      });

      for (let i = 0; i < ll.length - 1; i++) {
        const sg = segments[i];
        const pl = L.polyline([ll[i], ll[i + 1]], {
          color: '#f0a030', weight: 2.5, dashArray: '8,7', opacity: 0.65,
        }).addTo(map);

        if (sg) {
          pl.bindPopup(
            `<div class="dpop">
              <strong>${sg.from} → ${sg.to}</strong><br>
              ⏱ Guida netta: <strong>${sg.net}</strong><br>
              🚗 Con soste reali: <strong style="color:#fb923c">${sg.real}</strong><br>
              📍 ${sg.km}<br>
              <span style="font-size:11px;color:#4d6380">Via: ${sg.via}</span>
            </div>`,
            { className: '' }
          );
        }
      }

      map.fitBounds(L.latLngBounds(ll), { padding: [50, 50] });
    });

    return () => {
      mounted = false;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} className={styles.map} />;
}
