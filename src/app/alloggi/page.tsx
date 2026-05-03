import { stops } from '@/data/stops';
import HotelCard from '@/components/hotels/HotelCard';
import InfoBox from '@/components/ui/InfoBox';

export default function AlloggiPage() {
  return (
    <div className="page-scroll">
      <div className="pi">
        <div className="ph">
          <div className="ph-ey">Dove dormire</div>
          <h1>Alloggi &amp; Hotel</h1>
          <p>Selezione per ogni tappa: budget, mid-range e un upgrade quando lo merita il luogo. Prezzi per camera/notte in ottobre.</p>
        </div>

        <InfoBox variant="success" style={{ marginBottom: '1.5rem' }}>
          <strong>💡 Budget alloggi stimato per 4 persone:</strong> Con mix economico-mid range, stimate €100-150/persona/notte (due camere doppie a €130-200/notte l&apos;una).{' '}
          <strong>Prenotate subito</strong> gli hotel dentro i parchi nazionali (Yavapai Lodge, Bryce Canyon Lodge, Zion Lodge, El Tovar): si esauriscono con 6-13 mesi di anticipo su recreation.gov.
        </InfoBox>

        {stops.map((stop) => (
          <HotelCard key={stop.n} stop={stop} />
        ))}
      </div>
    </div>
  );
}
