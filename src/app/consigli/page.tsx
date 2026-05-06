import InfoBox from '@/components/ui/InfoBox';
import SectionTitle from '@/components/ui/SectionTitle';
import StatRow from '@/components/ui/StatRow';
import PageTransition from '@/components/ui/PageTransition';

const tripStats = [
  { value: '~€4.500', label: 'Budget / persona' },
  { value: '~3.900',  label: 'Km percorsi totali' },
  { value: '~42h',    label: 'Ore di guida stimate' },
  { value: '$250',    label: 'Non-Resident Park Pass' },
];

export default function ConsiglioPage() {
  return (
    <div className="page-scroll">
      <PageTransition>
      <div className="pi">
        <div className="ph">
          <div className="ph-ey">Logistica &amp; Pratiche</div>
          <h1>Consigli Generali</h1>
          <p>Da ESTA al noleggio auto, dai pedaggi al carburante, dai parchi nazionali alle regole della strada.</p>
        </div>

        <StatRow stats={tripStats} />

        <SectionTitle>✈️ ESTA &amp; Ingresso USA</SectionTitle>
        <InfoBox variant="warning">
          <strong>Costo: $40/persona</strong> (portato da $21 nel 2025). Validità biennale. Richiedi SUBITO su <strong>esta.cbp.dhs.gov</strong> — il sito ufficiale del CBP, evita i portali intermediari a pagamento.<br /><br />
          <strong>Novità 2026 in vigore o in arrivo:</strong> Il CBP ha introdotto l&apos;obbligo di dichiarare tutti gli account social media degli ultimi 5 anni (Instagram, Facebook, X/Twitter, TikTok, LinkedIn, ecc.), numeri di telefono (5 anni), email (10 anni) e dati familiari. Prevista la migrazione su app ESTA Mobile. Dal 26 dicembre 2025: scansione facciale biometrica obbligatoria all&apos;ingresso e uscita USA per tutti i non-cittadini.<br /><br />
          <strong>Per italiani con doppia cittadinanza</strong> con Iran, Iraq, Siria, Sudan, Corea del Nord, o che abbiano visitato questi paesi dal 2011: l&apos;ESTA non è utilizzabile, serve il visto.
        </InfoBox>

        <SectionTitle>🚗 Noleggio Auto</SectionTitle>
        <InfoBox variant="success">
          <strong>Veicolo ideale per 4 persone:</strong> SUV intermedio (Toyota RAV4, Chevy Equinox, Ford Edge, Hyundai Santa Fe). Altezza da terra sufficiente per Valley Drive a Monument Valley e comfort su 16 giorni di guida.
        </InfoBox>
        <InfoBox>
          <strong>Dove prenotare:</strong> <strong>AutoEurope</strong> (autoeurope.it) è la scelta migliore per gli italiani — interfaccia in italiano, CDW/LDW inclusa, pacchetto &quot;Senza Franchigia&quot;, assistenza telefonica in italiano. Alternative: DiscoverCars.com, Rentalcars.com per confronto prezzi.<br /><br />
          <strong>One-way LAX → SFO:</strong> Sixt non applica supplementi one-way in California — vantaggio significativo rispetto ad altri operatori che possono aggiungere $200-700.<br /><br />
          <strong>Costo stimato 16 giorni:</strong> $1.200–2.200 tutto incluso (SUV, assicurazioni, tasse).<br /><br />
          <strong>Carta di credito obbligatoria:</strong> Intestata al guidatore principale, non prepagata, non di debito. Plafond disponibile minimo €1.500-2.000 per il deposito cauzionale.
        </InfoBox>

        <SectionTitle>🛡️ Assicurazione Auto — Il Punto Più Critico</SectionTitle>
        <InfoBox variant="danger">
          <strong>⚠️ La responsabilità civile base è pericolosamente insufficiente.</strong> In California il minimo legale è $15.000 per danni a persona. In un paese dove le cause per incidenti raggiungono milioni di dollari, questa copertura è del tutto inadeguata.<br /><br />
          <strong>Acquista SEMPRE:</strong>
          <ul>
            <li>✅ <strong>SLI/ALI</strong> (Supplemental Liability Insurance): massimale minimo $1.000.000</li>
            <li>✅ <strong>CDW/LDW</strong> senza franchigia: copre i danni al veicolo noleggiato</li>
            <li>⚠️ La CDW spesso esclude vetri, pneumatici e sottoscocca — verifica la polizza</li>
            <li>⚠️ Le carte di credito italiane NON offrono coperture equivalenti a quelle USA</li>
          </ul><br />
          <strong>Strategia:</strong> Prenota via AutoEurope con tariffa &quot;Senza Franchigia&quot; già inclusa + SLI. Al banco di ritiro, rifiuta TUTTE le assicurazioni aggiuntive proposte dagli addetti (sono venditori a provvigione).
        </InfoBox>

        <SectionTitle>📄 Patente Internazionale</SectionTitle>
        <InfoBox variant="warning">
          <strong>⚠️ L&apos;Arizona richiede IDP o traduzione certificata</strong> — e voi lo attraversate. La patente italiana da sola non basta. Modello richiesto: <strong>Convenzione di Ginevra 1949</strong>, validità 1 anno.<br /><br />
          • <strong>ACI</strong> (~€76): sportello con modulo TT746, 2 fototessere (1 autenticata), fotocopia patente e documento. Più rapido e comodo.<br />
          • <strong>Motorizzazione Civile</strong> (€42,20): tempi 15-20 giorni lavorativi.<br /><br />
          Richiedila ora — con partenza il 1° ottobre hai tutto il tempo.
        </InfoBox>

        <SectionTitle>⛽ Carburante &amp; Prezzi</SectionTitle>
        <InfoBox>
          <strong>Prezzi stimati ottobre 2026</strong> (influenzati dalla crisi del cherosene che impatta anche i derivati petroliferi):<br />
          • <strong>California:</strong> $5,50–6,00/gallone (≈€1,45–1,55/litro) — la più cara degli USA<br />
          • <strong>Nevada:</strong> $4,50–5,00/gallone<br />
          • <strong>Arizona:</strong> $3,80–4,30/gallone<br />
          • <strong>Utah:</strong> $3,60–4,10/gallone<br /><br />
          <strong>Budget carburante totale stimato:</strong> $450–700 per l&apos;intero itinerario con SUV (25-28 MPG).<br /><br />
          Usa sempre <strong>Regular Unleaded (87 ottani)</strong> salvo indicazione contraria. App <strong>GasBuddy</strong> per trovare le stazioni più economiche in tempo reale. In California puoi risparmiare $0,30-0,60/gallone scegliendo le stazioni giuste.
        </InfoBox>

        <SectionTitle>🏞️ Parchi Nazionali — Non-Resident Pass OBBLIGATORIO</SectionTitle>
        <InfoBox variant="danger">
          <strong>🔴 Dal 1° gennaio 2026: $100 a persona per non-residenti USA</strong> in 11 parchi, inclusi Grand Canyon, Yosemite, Bryce Canyon e Zion. Per 4 persone in 4 parchi = <strong>$1.600 solo di sovrattasse</strong>, più i biglietti standard ($30-35/veicolo).<br /><br />
          <strong>SOLUZIONE: Non-Resident Annual Pass a $250 — un solo pass per tutto il gruppo.</strong><br />
          Copre il titolare + tutti i passeggeri del veicolo privato in tutti i parchi federali per 12 mesi.<br />
          Acquista su <strong>store.usgs.gov</strong> (versione digitale usabile da smartphone) o <strong>recreation.gov</strong>.<br />
          <strong>Risparmio calcolato: oltre $1.350 rispetto ai biglietti singoli.</strong>
        </InfoBox>

        <SectionTitle>🛣️ Pedaggi &amp; FasTrak</SectionTitle>
        <InfoBox>
          In California i pedaggi sono tutti elettronici (niente caselli fisici con personale): sistema <strong>FasTrak</strong>. La compagnia di noleggio rileva i transiti e addebita pedaggi + supplemento giornaliero ($3,95–4,95 nei giorni con transiti). <strong>Golden Gate Bridge:</strong> $9,75 solo in direzione sud (Marin → San Francisco non ha pedaggi). Arizona, Utah e Nevada: nessun pedaggio significativo sul vostro percorso.
        </InfoBox>

        <SectionTitle>📱 App Indispensabili da Scaricare Prima</SectionTitle>
        <InfoBox>
          <strong>Scarica offline PRIMA di imbarcarti:</strong>
          <ul>
            <li>📍 <strong>Google Maps</strong>: scarica le mappe offline di CA, NV, AZ, UT. Fondamentale in Death Valley, Monument Valley, Utah rurale (zero segnale)</li>
            <li>⛽ <strong>GasBuddy</strong>: prezzi carburante in tempo reale lungo il percorso</li>
            <li>🏕 <strong>Recreation.gov</strong>: prenotazioni parchi, Angels Landing, camping</li>
            <li>🚦 <strong>Waze</strong>: traffico in tempo reale (ottimo in CA e NV)</li>
            <li>🗺 <strong>iOverlander</strong>: punti di interesse off-road, servizi in zone remote</li>
            <li>🎟 <strong>Viator</strong>: tour guidati (Antelope Canyon, Monument Valley, kayak)</li>
          </ul>
        </InfoBox>

        <SectionTitle>🕐 Fusi Orari — Attenzione alla Nazione Navajo</SectionTitle>
        <InfoBox variant="warning">
          <strong>In ottobre (prima del 1° novembre, ora legale USA ancora attiva):</strong><br />
          • <strong>California, Nevada (PDT = UTC-7):</strong> LA, San Diego, Palm Springs, Joshua Tree, Death Valley, Mammoth, Yosemite, SF<br />
          • <strong>Arizona (MST = UTC-7, NO ora legale):</strong> Grand Canyon South Rim, Page, Oatman — in ottobre stessa ora di CA/NV per coincidenza<br />
          • <strong>Utah (MDT = UTC-6):</strong> Moab, Arches, Bryce Canyon, Zion — 1 ORA AVANTI rispetto a CA/NV<br />
          • <strong>Nazione Navajo (MDT = UTC-6):</strong> Antelope Canyon, Monument Valley — segue Utah, 1 ora avanti rispetto all&apos;AZ circostante<br /><br />
          Il GPS del telefono corregge automaticamente. Attenzione alle prenotazioni di tour Navajo: gli orari sono spesso espressi in ora locale Navajo.
        </InfoBox>

        <SectionTitle>💰 Mance &amp; Pagamenti</SectionTitle>
        <InfoBox>
          <strong>Mance (gratuità):</strong> 18-22% nei ristoranti, 15% in bar e caffè, $2-3 per corsa Uber/taxi, $5-10/giorno ai facchini d&apos;hotel. Non è opzionale nel sistema americano.<br /><br />
          <strong>Pagamenti:</strong> Visa/Mastercard accettate ovunque. <strong>Avvisa la tua banca prima di partire</strong> per evitare blocchi antifrode. Porta sempre $150-200 in contanti per emergenze in zone remote (Navajo Nation, Death Valley).
        </InfoBox>

        <SectionTitle>🚦 Regole della Strada USA</SectionTitle>
        <InfoBox>
          <ul>
            <li>🟢 <strong>Svolta a destra col rosso:</strong> legale quasi ovunque — ma fermati completamente prima</li>
            <li>🟡 <strong>4-way stop:</strong> chi arriva primo passa primo; in caso di pareggio, chi è a destra ha la precedenza</li>
            <li>🔴 <strong>School bus con luci rosse lampeggianti:</strong> fermati in ENTRAMBE le direzioni — multa salatissima</li>
            <li>♦ <strong>HOV lanes:</strong> con 4 occupanti potete usare le corsie preferenziali in California</li>
            <li>⚡ <strong>Limiti di velocità:</strong> rispettali scrupolosamente — piccoli centri in AZ e UT usano autovelox per fare cassa</li>
            <li>🦌 <strong>Fauna in strada:</strong> mule deer, bighorn sheep, coyote specialmente al crepuscolo. Riduci la velocità di notte</li>
          </ul>
        </InfoBox>
      </div>
      </PageTransition>
    </div>
  );
}
