import dynamic from 'next/dynamic';

const TripMap = dynamic(() => import('@/components/map/TripMap'), {
  ssr: false,
  loading: () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--muted)', fontSize: '.85rem' }}>
      Caricamento mappa…
    </div>
  ),
});

export default function MapPage() {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <TripMap />
    </div>
  );
}
