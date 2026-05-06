import type { Stat } from '@/data/types';

interface StatRowProps {
  stats: Stat[];
}

export default function StatRow({ stats }: StatRowProps) {
  return (
    <div className="stat-row">
      {stats.map((s, i) => (
        <div
          key={i}
          className="stat reveal"
          style={{ animationDelay: `${i * 0.07}s` }}
        >
          <div className="sv">{s.value}</div>
          <div className="sl">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
