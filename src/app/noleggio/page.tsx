import InfoBox from '@/components/ui/InfoBox';
import SectionTitle from '@/components/ui/SectionTitle';
import StatRow from '@/components/ui/StatRow';

const stats = [
  { value: '$906',  label: 'Miglior prezzo SUV 15gg (SIXT)' },
  { value: '9.3',   label: 'Rating Alamo / Enterprise' },
  { value: '$0',    label: 'One-way fee LAX→SFO (SIXT)' },
  { value: '5+',    label: 'Agenzie comparate' },
];

const agencies = [
  {
    name: 'SIXT',
    badge: '⭐ 9.0 Excellent',
    accent: 'ca-g',
    tagline: 'Miglior prezzo assoluto',
    rows: [
      ['Prezzo SUV (15gg)', 'Da $906 — Toyota RAV4 (~$60/giorno)'],
      ['One-way fee', '$0 — confermato per California intrastate'],
      ['Chilometraggio', 'Illimitato (confirmed one-way LAX→SFO)'],
      ['Età minima', '21 anni; supplemento under-25 applicato'],
      ['Cancellazione', 'Gratuita (48h prima per alcune tariffe)'],
      ['Deposito', 'Minimo $200 in hold sulla carta di credito'],
      ['Skip the counter', 'Sì (tramite app SIXT)'],
      ['AWD', 'Toyota RAV4 AWD disponibile'],
    ],
    pro: 'Prezzo più basso, zero one-way fee confermata, flotta nuova e premium rispetto agli americani.',
    contro: 'Rete USA meno estesa dei giganti americani; flotta di lusso esclusa per under-25.',
  },
  {
    name: 'Alamo',
    badge: '⭐ 9.3 Excellent',
    accent: 'ca-c',
    tagline: 'Miglior rating — scelta ideale road trip',
    rows: [
      ['Prezzo SUV (15gg)', '$1.471 — Compact SUV Nissan Rogue (~$98/giorno)'],
      ['One-way fee', 'Valutata caso per caso; disclosed al momento della prenotazione'],
      ['Cancellazione', 'Gratuita (confermato)'],
      ['Skip the counter', 'Sì (Alamo Insiders)'],
      ['Specializzazione', 'Road trip nordamericano; puoi scegliere il modello nel parcheggio'],
    ],
    pro: 'Miglior punteggio qualità, cancellazione gratuita, pick nel parcheggio. Stesso gruppo di Enterprise e National.',
    contro: 'Prezzo 62% più alto di SIXT per la stessa categoria; one-way fee non garantita a $0.',
  },
  {
    name: 'Enterprise',
    badge: '⭐ 9.3 Excellent',
    accent: 'ca-c',
    tagline: 'Affidabilità e rete capillare',
    rows: [
      ['Prezzo SUV (15gg)', '$1.607 — Intermediate SUV Nissan Rogue (~$107/giorno)'],
      ['One-way fee', 'Tipicamente inclusa nella tariffa'],
      ['Rete', 'La più vasta degli USA, incluse sedi non aeroportuali'],
    ],
    pro: 'Eccellente reputation per il servizio clienti, flotta affidabile, scelta ideale per lunghi noleggi.',
    contro: 'Prezzo più alto di Alamo (stesso gruppo) e molto più alto di SIXT.',
  },
  {
    name: 'Hertz',
    badge: '7.5 Good',
    accent: 'ca-o',
    tagline: 'Flotta ampia, programma fedeltà',
    rows: [
      ['Prezzo SUV (15gg)', 'Compact $1.221 / Intermediate $1.285 / Standard $1.539'],
      ['Modelli', 'Compact: Nissan Rogue · Standard: Chevrolet Blazer · Large: GMC Yukon'],
      ['One-way fee', 'Tipicamente $0 per intra-California; verificare al momento'],
      ['Chilometraggio', 'Da verificare al momento della prenotazione'],
      ['Skip the counter', 'Sì (Gold Plus Rewards)'],
    ],
    pro: 'Presenza capillare, Gold Plus program, modelli Large SUV disponibili (GMC Yukon), Skip the counter.',
    contro: 'Rating 7.5 (più basso tra i principali), prezzi 40–70% più alti di SIXT, assicurazioni non incluse.',
  },
  {
    name: 'Thrifty',
    badge: '7.5 Good',
    accent: 'ca-r',
    tagline: 'Miglior prezzo Full-size SUV',
    rows: [
      ['Prezzo SUV (15gg)', '$1.818 — Full-size Nissan Pathfinder (~$121/giorno)'],
      ['Disponibile su', 'Kayak, Expedia, Priceline, Auto Europe + 7 altri siti'],
    ],
    pro: 'Miglior prezzo trovato per la categoria Full-size 7 posti.',
    contro: 'Rating 7.5, brand economy, meno sedi rispetto ai principali.',
  },
];

const suvsDesert = [
  { priority: 'Efficienza + deserto', model: 'Toyota RAV4 Hybrid AWD',  reason: 'AWD automatico, ibrido (−30% carburante), altezza sufficiente per strade ghiaiose', where: 'SIXT — da $906/15gg' },
  { priority: 'Spazio + versatilità',  model: 'Chevrolet Blazer AWD',    reason: 'Standard SUV, più spazio del RAV4, ottimo per itinerari misti',                       where: 'Hertz — $1.539/15gg' },
  { priority: '7 posti + deserto',     model: 'Nissan Pathfinder',        reason: 'Full-size, 7 posti, adatto a gruppi, strade desertiche asfaltate',                     where: 'Thrifty — $1.818/15gg' },
  { priority: 'Massimo spazio',        model: 'GMC Yukon / Chevy Tahoe', reason: 'Veicolo largo e alto, ideale per famiglie o grandi bagagli',                            where: 'Hertz — categoria Large' },
];

export default function NoleggioPage() {
  return (
    <div className="page-scroll">
      <div className="pi">
        <div className="ph">
          <div className="ph-ey">Logistica · Trasporti</div>
          <h1>Noleggio SUV — LAX → SFO</h1>
          <p>Comparazione aggiornata aprile 2026 · 15 giorni one-way · 177 risultati analizzati su Kayak, SIXT, Hertz, Alamo, Rentalcars.com.</p>
        </div>

        <StatRow stats={stats} />

        {/* ── PRICING TABLE ── */}
        <SectionTitle>💰 Prezzi live — SUV LAX→SFO (15 giorni)</SectionTitle>
        <InfoBox>
          I totali includono tasse aeroportuali e CFC (~$10 in California) ma <strong>non</strong> le assicurazioni aggiuntive (CDW/SLI), che aumentano il costo di $15–50/giorno se acquistate al banco.
        </InfoBox>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', marginTop: '.75rem' }}>
          {[
            { n: 1,  cat: 'Intermediate SUV', model: 'Toyota RAV4 o sim.',       agency: 'SIXT',       total: '$906',    day: '~$60',  platform: 'Priceline/KAYAK',       rating: '⭐ 9.0', accent: '#f0a030' },
            { n: 2,  cat: 'Compact SUV',       model: 'Volkswagen Taos o sim.',   agency: 'SIXT',       total: '$910',    day: '~$61',  platform: 'EconomyBookings',        rating: '⭐ 9.0', accent: '#f0a030' },
            { n: 3,  cat: 'Compact SUV',       model: 'Chevrolet Trax o sim.',    agency: 'Hertz',      total: '$1.221',  day: '~$81',  platform: 'Expedia/Hertz',          rating: '7.5',    accent: '#fb923c' },
            { n: 4,  cat: 'Intermediate SUV',  model: 'Nissan Rogue o sim.',      agency: 'Hertz',      total: '$1.285',  day: '~$86',  platform: 'Expedia/Hertz',          rating: '7.5',    accent: '#fb923c' },
            { n: 5,  cat: 'Intermediate SUV',  model: 'Nissan Rogue o sim.',      agency: 'Alamo',      total: '$1.471',  day: '~$98',  platform: 'Booking.com',            rating: '⭐ 9.3', accent: '#38bdf8' },
            { n: 6,  cat: 'Standard SUV',      model: 'Chevrolet Blazer o sim.',  agency: 'Hertz',      total: '$1.539',  day: '~$103', platform: 'Expedia/Hertz',          rating: '7.5',    accent: '#fb923c' },
            { n: 7,  cat: 'Intermediate SUV',  model: 'Nissan Rogue o sim.',      agency: 'Enterprise', total: '$1.607',  day: '~$107', platform: 'Multiple',               rating: '⭐ 9.3', accent: '#38bdf8' },
            { n: 8,  cat: 'Full-size SUV',     model: 'Nissan Pathfinder o sim.', agency: 'Thrifty',    total: '$1.818',  day: '~$121', platform: 'Auto Europe + 10 siti',  rating: '7.5',    accent: '#f87171' },
            { n: 9,  cat: 'Minivan 7-posti',   model: 'Chrysler Pacifica o sim.', agency: 'Alamo',      total: '$2.098',  day: '~$140', platform: 'Priceline/KAYAK',        rating: '⭐ 9.3', accent: '#38bdf8' },
          ].map(r => (
            <div key={r.n} className="card" style={{ padding: '.75rem 1rem .75rem 1.2rem', borderLeft: `3px solid ${r.accent}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '.5rem', flexWrap: 'wrap' }}>
                <div>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.92rem' }}>{r.agency}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.78rem', marginLeft: '.5rem' }}>{r.cat} · {r.model}</span>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.1rem', color: 'var(--gold)' }}>{r.total}</span>
                  <span style={{ color: 'var(--muted)', fontSize: '.72rem', marginLeft: '.35rem' }}>{r.day}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '.5rem', marginTop: '.3rem', flexWrap: 'wrap' }}>
                <span className="b b-dr" style={{ fontSize: '.63rem' }}>{r.platform}</span>
                <span className="b b-d"  style={{ fontSize: '.63rem' }}>{r.rating}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── AGENCY DETAIL ── */}
        <SectionTitle>🏢 Confronto per agenzia</SectionTitle>

        {agencies.map(ag => (
          <div key={ag.name} className="card" style={{ marginBottom: '1rem', padding: '1rem 1.1rem 1rem 1.25rem' }}>
            <div className={`ca ${ag.accent}`} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.3rem', marginBottom: '.65rem' }}>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem' }}>{ag.name}</span>
              <div style={{ display: 'flex', gap: '.4rem', alignItems: 'center' }}>
                <span className="b b-d" style={{ fontSize: '.65rem' }}>{ag.badge}</span>
                <span style={{ fontSize: '.72rem', color: 'var(--muted)' }}>{ag.tagline}</span>
              </div>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '.78rem' }}>
              <tbody>
                {ag.rows.map(([k, v]) => (
                  <tr key={k} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '.35rem .5rem .35rem 0', color: 'var(--muted)', whiteSpace: 'nowrap', paddingRight: '1rem', width: '1%' }}>{k}</td>
                    <td style={{ padding: '.35rem 0', color: '#c5d8ef' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: '.7rem', display: 'flex', gap: '.6rem', flexDirection: 'column' }}>
              <div style={{ fontSize: '.78rem', color: '#6dbf8f' }}>✅ {ag.pro}</div>
              <div style={{ fontSize: '.78rem', color: '#9ca3af' }}>⚠️ {ag.contro}</div>
            </div>
          </div>
        ))}

        {/* ── INSURANCE ── */}
        <SectionTitle>🛡️ Costi assicurativi</SectionTitle>
        <InfoBox variant="danger">
          <strong>Il capitolo più critico per i viaggiatori italiani.</strong>
          <ul style={{ marginTop: '.6rem' }}>
            <li>🔴 <strong>SLI/ALI</strong> (responsabilità civile fino a $1.000.000) — INDISPENSABILE, acquistare prepagato (50% più cara al banco)</li>
            <li>🔴 <strong>CDW/LDW</strong> — esonero danni/furto sul veicolo, $15–30/giorno al banco</li>
            <li>⚠️ <strong>Super CDW</strong> — azzera la franchigia CDW, necessario se CDW base ha franchigia $1.000–3.000</li>
            <li>🟡 <strong>PAI</strong> — costi medici conducente + passeggeri (utile se non coperti da assicurazione viaggio)</li>
            <li>🟡 <strong>Roadside Assistance</strong> — guasto, chiavi perse, carburante finito (consigliato per il deserto)</li>
          </ul>
        </InfoBox>
        <InfoBox variant="warning">
          <strong>Stima costo assicurazioni al banco (15 giorni):</strong><br />
          CDW + Super CDW: $375–900 · SLI: $150–300 · PAI + Roadside: $100–200<br />
          <strong>Totale aggiuntivo stimato: $625–1.400</strong><br /><br />
          <strong>Alternativa:</strong> Prenotare via <strong>Discover Cars</strong> o <strong>Auto Europe</strong> con pacchetto assicurativo prepagato (CDW zero franchigia + SLI $1M inclusi) costa $200–350 extra invece di $625–1.400 al banco.
        </InfoBox>
        <InfoBox>
          <strong>⚠️ Attenzione strade non asfaltate:</strong> La guida su gravel/dirt road annulla immediatamente CDW e SLI su quasi tutti i contratti. Per Monument Valley Backcountry o Death Valley, verificare sempre il contratto prima di partire.
        </InfoBox>

        {/* ── DESERT SUVs ── */}
        <SectionTitle>🏜️ SUV consigliati per il deserto</SectionTitle>
        <InfoBox>
          Le strade dei parchi nazionali (Bryce Canyon, Zion, Grand Canyon) sono tutte asfaltate. Solo Monument Valley ha un percorso sterrato. L&apos;AWD è raccomandato per sicurezza in caso di temporali improvvisi, ma un 4WD attivo non è richiesto per un itinerario standard California-deserto.
        </InfoBox>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '.55rem', marginTop: '.5rem' }}>
          {suvsDesert.map(s => (
            <div key={s.model} className="card" style={{ padding: '.8rem 1rem .8rem 1.2rem', borderLeft: '3px solid var(--gold)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.25rem' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.9rem' }}>{s.model}</span>
                <span className="b b-d" style={{ fontSize: '.63rem' }}>{s.where}</span>
              </div>
              <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginTop: '.2rem' }}>{s.priority}</div>
              <div style={{ fontSize: '.78rem', color: '#8fa8c8', marginTop: '.25rem' }}>{s.reason}</div>
            </div>
          ))}
        </div>

        {/* ── FINAL RECOMMENDATION ── */}
        <SectionTitle>🏆 Raccomandazione finale</SectionTitle>

        {[
          {
            label: 'A',
            title: 'Massimo risparmio',
            subtitle: 'SUV intermedio · 1–2 persone',
            accent: '#34d399',
            items: [
              'SIXT Toyota RAV4 AWD — $906 totali (~$60/giorno)',
              'Prenota via Kayak (deal Priceline a $906)',
              'Assicurazione prepagata via Discover Cars o carta CC premium (CDW)',
              'SLI separata $1M: ~$150 aggiuntivi',
            ],
            total: '~$1.200–1.350',
          },
          {
            label: 'B',
            title: 'Miglior qualità/prezzo',
            subtitle: 'Con servizio eccellente · 2–4 persone',
            accent: '#38bdf8',
            items: [
              'Alamo Intermediate SUV — $1.471 totali (~$98/giorno)',
              'Rating 9.3/10, cancellazione gratuita, skip the counter',
              'Prenota via Booking.com per la tariffa più bassa',
            ],
            total: '~$1.800–2.000',
          },
          {
            label: 'C',
            title: 'Full-size SUV',
            subtitle: '5–7 persone o luggage intensivo',
            accent: '#fb923c',
            items: [
              'Thrifty Nissan Pathfinder — $1.818 totali (~$121/giorno)',
              'Disponibile su 11 siti (Auto Europe, Kayak, Expedia, Priceline…)',
              'Verificare rating della sede Thrifty LAX prima di prenotare',
            ],
            total: '~$2.300–2.600',
          },
        ].map(s => (
          <div key={s.label} className="card" style={{ marginBottom: '.8rem', padding: '1rem 1.1rem 1rem 1.25rem', borderLeft: `3px solid ${s.accent}` }}>
            <div style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: s.accent, lineHeight: 1, flexShrink: 0 }}>{s.label}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.95rem' }}>{s.title}</div>
                <div style={{ fontSize: '.72rem', color: 'var(--muted)', marginBottom: '.5rem' }}>{s.subtitle}</div>
                <ul className="tl">
                  {s.items.map(item => (
                    <li key={item}><span className="tic">›</span>{item}</li>
                  ))}
                </ul>
                <div style={{ marginTop: '.6rem', fontSize: '.82rem' }}>
                  Costo totale stimato tutto compreso: <strong style={{ color: s.accent }}>{s.total}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* ── AGGREGATORS ── */}
        <SectionTitle>🔍 Aggregatori consigliati</SectionTitle>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '.45rem' }}>
          {[
            { name: 'Kayak',          use: 'Prima ricerca',            desc: '177+ risultati LAX→SFO, confronto in tempo reale, filtra per rating' },
            { name: 'Discover Cars',  use: 'Europei senza copertura CC', desc: 'Tariffe fino al 70% più basse; include CDW+SLI zero franchigia' },
            { name: 'Auto Europe',    use: 'Pacchetti all-inclusive',   desc: '"Gold Rate" con 3 guidatori extra + primo pieno; cancellazione gratuita 48h' },
            { name: 'Rentalcars.com', use: 'Confronto rapido',          desc: 'Volume massiccio di offerte, interfaccia semplice' },
            { name: 'AutoSlash',      use: 'Monitoraggio continuo',     desc: 'Monitora la tua prenotazione e avvisa se il prezzo scende' },
          ].map(a => (
            <div key={a.name} className="card" style={{ padding: '.7rem 1rem .7rem 1.2rem', borderLeft: '3px solid var(--cyan)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '.2rem' }}>
                <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.88rem' }}>{a.name}</span>
                <span className="b b-dr" style={{ fontSize: '.63rem' }}>{a.use}</span>
              </div>
              <div style={{ fontSize: '.77rem', color: 'var(--muted)', marginTop: '.2rem' }}>{a.desc}</div>
            </div>
          ))}
        </div>

        {/* ── CHECKLIST ── */}
        <SectionTitle>✅ Checklist pre-prenotazione</SectionTitle>
        <InfoBox>
          <ul className="tl" style={{ marginTop: 0 }}>
            {[
              'Prenotare 3–6 mesi prima per massimizzare disponibilità e prezzo',
              'Verificare che la tariffa sia "Pay Later" / rimborsabile (non "Pay Now" non rimborsabile)',
              'Confermare che la one-way fee LAX→SFO sia $0 prima di concludere',
              'Acquistare SLI $1M — non demandare alla sola carta di credito',
              'Portare patente italiana + IDP (Patente Internazionale)',
              'Usare carta di credito per il ritiro (non prepagata, non virtuale)',
              'Scaricare mappe offline Google Maps (evita $15–20/giorno per il GPS)',
              'Verificare la politica strade non asfaltate nel contratto',
              'Registrarsi al programma fedeltà dell\'agenzia (gratuito, spesso dà Skip the Counter)',
              'Monitorare il prezzo con AutoSlash dopo aver prenotato',
            ].map(item => (
              <li key={item}><span className="tic">✓</span>{item}</li>
            ))}
          </ul>
        </InfoBox>

        <div style={{ fontSize: '.67rem', color: 'var(--muted)', marginTop: '1.5rem', borderTop: '1px solid var(--border)', paddingTop: '.75rem' }}>
          Prezzi rilevati aprile 2026 — Indicativi, soggetti a variazione. Verificare la quotazione definitiva al momento della prenotazione.
        </div>
      </div>
    </div>
  );
}
