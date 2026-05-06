import type { Stop } from '@/data/types';
import Badge from '@/components/ui/Badge';

interface Props {
  stop: Stop;
  index?: number;
}

export default function StopCard({ stop, index = 0 }: Props) {
  return (
    <div
      className="card reveal"
      style={{ animationDelay: `${Math.min(index * 0.04, 0.4)}s` }}
    >
      <div className="ca ca-g" />

      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.5rem', marginBottom: '.65rem' }}>
        <div>
          <span style={{ color: 'var(--gold)', fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-.02em' }}>
            {stop.n}.
          </span>
          <span className="ct" style={{ marginLeft: '.4rem' }}>{stop.title}</span>
        </div>
        <div style={{ display: 'flex', gap: '.35rem', flexWrap: 'wrap' }}>
          {stop.driveFrom
            ? <Badge variant="drive">🚗 {stop.driveReal} da {stop.driveFrom}</Badge>
            : <Badge variant="ok">✈️ Partenza</Badge>
          }
          <Badge variant="date">{stop.day}</Badge>
          <Badge variant="ok">🌡 {stop.temp}</Badge>
        </div>
      </div>

      <div className="pills">
        {stop.highlights.map((h, i) => (
          <span key={i} className="pill">{h}</span>
        ))}
      </div>

      <ul className="tl">
        {stop.tips.map((tip, i) => (
          <li key={i}>
            <span className="tic">{tip.icon}</span>
            {tip.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
