import { stops } from '@/data/stops';
import StopCard from '@/components/stops/StopCard';

export default function TappePage() {
  return (
    <div className="page-scroll">
      <div className="pi">
        <div className="ph">
          <div className="ph-ey">Itinerario ottimizzato · 16 giorni</div>
          <h1>Tappe &amp; Consigli</h1>
          <p>Consigli pratici tappa per tappa, dall&apos;atterraggio a LAX al volo di ritorno da SFO.</p>
        </div>
        {stops.map((stop) => (
          <StopCard key={stop.n} stop={stop} />
        ))}
      </div>
    </div>
  );
}
