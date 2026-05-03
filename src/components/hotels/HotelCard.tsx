import type { Stop } from '@/data/types';
import Badge from '@/components/ui/Badge';

interface Props {
  stop: Stop;
}

export default function HotelCard({ stop }: Props) {
  const { hotel } = stop;

  return (
    <div className="card" style={{ marginBottom: '.75rem' }}>
      <div className="ca ca-c" />

      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.75rem', flexWrap: 'wrap' }}>
        <div className="ct">{stop.n}. {stop.title}</div>
        <Badge variant="date">{stop.day}</Badge>
      </div>

      <div className="htier">
        <div className="htl b2">BUDGET</div>
        <div>
          <div className="hn">{hotel.budget.name}</div>
          <div className="hp">{hotel.budget.price} per camera</div>
          <div className="hnote">{hotel.budget.note}</div>
        </div>
      </div>

      <div className="htier">
        <div className="htl m2">MID</div>
        <div>
          <div className="hn">{hotel.mid.name}</div>
          <div className="hp">{hotel.mid.price} per camera</div>
          <div className="hnote">{hotel.mid.note}</div>
        </div>
      </div>

      <div className="htier">
        <div className="htl lu">UPGRADE</div>
        <div>
          <div className="hn">{hotel.luxury.name}</div>
          <div className="hp">{hotel.luxury.price} per camera</div>
          <div className="hnote">{hotel.luxury.note}</div>
        </div>
      </div>
    </div>
  );
}
