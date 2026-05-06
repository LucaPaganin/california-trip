import InfoBox from '@/components/ui/InfoBox';
import SectionTitle from '@/components/ui/SectionTitle';
import PageTransition from '@/components/ui/PageTransition';

export default function GeopoliticaPage() {
  return (
    <div className="page-scroll">
      <PageTransition>
      <div className="pi">
        <div className="ph">
          <div className="ph-ey">Situazione attuale · Aprile 2026</div>
          <h1>Geopolitica &amp; Sicurezza</h1>
          <p>Analisi aggiornata: crisi del cherosene, nuove norme ESTA, dazi USA-UE, tassa parchi e sicurezza sul percorso.</p>
        </div>

        <InfoBox variant="danger">
          <strong>⚠️ Situazione in rapida evoluzione — aggiornata al 5 aprile 2026.</strong> La crisi del cherosene è reale e documentata. Il volo Lufthansa MXP→LAX è a rischio nel breve termine (estate 2026) ma probabilmente stabile per ottobre se il conflitto in Iran non si aggrava ulteriormente. Monitor attivo consigliato.
        </InfoBox>

        <SectionTitle>✈️ Crisi del Cherosene: Situazione Reale</SectionTitle>
        <InfoBox variant="danger">
          <strong>Cosa è successo:</strong> La guerra in Iran (febbraio 2026) ha portato alla chiusura dello Stretto di Hormuz. L&apos;ultimo tanker di jet fuel dal Golfo arriverà a Rotterdam il 9 aprile 2026 — poi nessuna spedizione prevista dalla regione. Le importazioni europee sono crollate del 40%. Il prezzo del jet fuel è raddoppiato da ~$750 a $1.500-1.800/tonnellata. Il Brent crude è a $109-111/barile.
        </InfoBox>
        <InfoBox variant="warning">
          <strong>Lufthansa specificamente (dati al 5/4/2026):</strong><br />
          • ~80% del carburante coperto da hedging a prezzi pre-crisi fino a fine 2026<br />
          • Prepara il ritiro di 40 aerei inefficienti (5% flotta), priorità su A340<br />
          • Morgan Stanley ha declassato il titolo: costi aggiuntivi stimati ~€1,5 miliardi nel 2026<br />
          • Rotte USA, le più redditizie, sono le ULTIME ad essere tagliate<br /><br />
          <strong>Per il vostro volo MXP→LAX:</strong> Nessuna cancellazione specifica al 5 aprile. Lufthansa opera MXP→LAX via Francoforte/Monaco con circa 17 voli settimanali. Il periodo critico (maggio-luglio) sarà già passato per ottobre.<br /><br />
          <strong>Cosa fare ORA:</strong>
          <ul>
            <li>✅ Iscriviti agli alert email Lufthansa per il tuo volo</li>
            <li>✅ Stipula assicurazione con copertura cancellazione volo/interruzione viaggio</li>
            <li>✅ Considera N26 Metal, Amex o Revolut Metal per protezione viaggio integrata sulla carta</li>
            <li>✅ Backup alternatives per ottobre: SWISS via Zurigo, Air France via Parigi, American Airlines diretto MXP-USA</li>
          </ul>
        </InfoBox>

        <SectionTitle>📋 ESTA 2026: Le Nuove Regole</SectionTitle>
        <InfoBox variant="warning">
          <strong>Aggiornamenti in vigore o in implementazione:</strong><br />
          • <strong>Costo: $40/persona</strong> (era $21) — validità 2 anni<br />
          • <strong>Social media (proposta CBP dicembre 2025):</strong> Dichiarazione obbligatoria di tutti gli account degli ultimi 5 anni: Instagram, Facebook, X, TikTok, YouTube, LinkedIn, Snapchat, ecc.<br />
          • <strong>Dati estesi:</strong> Numeri di telefono (5 anni), indirizzi email (10 anni), dati familiari<br />
          • <strong>Biometria:</strong> Dal 26/12/2025 scansione facciale obbligatoria all&apos;ingresso e uscita USA per tutti i non-cittadini<br />
          • <strong>Selfie obbligatorio</strong> oltre alla foto del passaporto<br /><br />
          <strong>L&apos;Italia NON è nel travel ban.</strong> Se hai doppia cittadinanza con Iran, Iraq, Siria, Sudan, Corea del Nord o hai visitato questi paesi dal 2011: l&apos;ESTA non è utilizzabile, serve un visto. Rivolgiti al Consolato USA a Milano.
        </InfoBox>

        <SectionTitle>🇮🇹 Relazioni Italia-USA: Tensioni ma Nessun Impatto su di Voi</SectionTitle>
        <InfoBox>
          <strong>Il quadro commerciale:</strong> Dazio universale del 15% sui prodotti europei (febbraio 2026). L&apos;UE ha sospeso la ratifica dell&apos;accordo commerciale e valuta contromisure. L&apos;Italia ha un surplus commerciale di €40 miliardi con gli USA — il più grande con qualunque Paese — trainato da vino, alimentari e moda.<br /><br />
          <strong>L&apos;Italia come mediatrice:</strong> Meloni si è posizionata come ponte Trump-UE. L&apos;incidente di Sigonella (aprile 2026, Italia nega atterraggio a bombardieri USA) è una frizione ma non tocca il piano consolare o turistico.<br /><br />
          <strong>Per voi praticamente:</strong> Nessun effetto. Gli americani amano gli italiani. Aspettatevi curiosità e calore, non ostilità.
        </InfoBox>

        <SectionTitle>🏞️ La Stangata dei Parchi Nazionali</SectionTitle>
        <InfoBox variant="danger">
          <strong>In vigore dal 1° gennaio 2026:</strong> $100/persona aggiuntivi per i non-residenti USA in 11 parchi nazionali tra cui Grand Canyon, Yosemite, Bryce Canyon e Zion. Per 4 persone in 4 parchi: <strong>$1.600 di sole sovrattasse</strong>.<br /><br />
          <strong>SOLUZIONE:</strong> Non-Resident Annual Pass a <strong>$250 per tutto il gruppo.</strong> Risparmio: &gt;$1.350. Acquista su store.usgs.gov prima di partire. La versione digitale funziona da smartphone — nessuna spedizione necessaria.
        </InfoBox>

        <SectionTitle>🔒 Sicurezza sul Percorso</SectionTitle>
        <InfoBox>
          <strong>San Francisco 🟡</strong> — Furti con rottura del vetro endemici (Tenderloin, SoMa, Mission). Non lasciare MAI nulla in vista nell&apos;auto — nemmeno un cavo di ricarica. Tenderloin e zone attorno a Market St: evita di sera.<br /><br />
          <strong>Los Angeles 🟡</strong> — Traffico pericoloso in autostrada, specie di notte. Venice Beach di sera richiede attenzione. Non fermarti in zone industriali isolate.<br /><br />
          <strong>Las Vegas 🟢</strong> — La Strip è ben sorvegliata, sicura per i turisti. Attenzione nelle zone fuori dalla Strip turistica.<br /><br />
          <strong>Parchi e deserto 🟢/🟡</strong> — Rischi principalmente ambientali: caldo estremo in Death Valley, caduta rocce, iponatremia (bevi anche se non hai sete). Porta sempre acqua extra, kit di pronto soccorso e powerbank. Mappe offline obbligatorie.<br /><br />
          <strong>Registra il viaggio:</strong> Iscriviti su <strong>dovesiamonelmondo.it</strong> (Farnesina) e scarica l&apos;app <strong>&quot;Viaggiare Sicuri&quot;</strong> per aggiornamenti in tempo reale e contatti consolari.
        </InfoBox>

        <SectionTitle>🏥 Assicurazione Sanitaria — Non È Opzionale</SectionTitle>
        <InfoBox variant="danger">
          <strong>Gli USA non hanno accordi sanitari con l&apos;Italia.</strong> Il SSN non copre nulla in America. Costi reali del sistema sanitario privato USA:<br />
          • Visita pronto soccorso: da $1.000<br />
          • Ricovero per notte: $3.000–10.000<br />
          • Appendicectomia: $25.000+<br />
          • Incidente grave con ricovero: $100.000+<br /><br />
          <strong>Copertura minima raccomandata: €300.000</strong> — meglio €1.000.000 o illimitata.<br />
          <strong>Costo:</strong> €33–61/settimana a persona (€4–9/giorno) — il costo assicurativo più ovvio di tutto il viaggio.<br /><br />
          <strong>Opzioni consigliate:</strong> <strong>Heymondo Premium</strong> (medico illimitato, assistenza 24/7 in italiano), <strong>Allianz Travel Care Extended</strong> (fino a €3M). Verifica che includa: rimpatrio sanitario, responsabilità civile verso terzi, annullamento viaggio, protezione bagaglio.
        </InfoBox>

        <SectionTitle>📞 Numeri Utili</SectionTitle>
        <InfoBox>
          <strong>Emergenze USA:</strong> 911 (polizia, ambulanza, vigili del fuoco)<br />
          <strong>Consolato Italiano Los Angeles:</strong> +1 310 820 0622<br />
          <strong>Consolato Italiano San Francisco:</strong> +1 415 292 9210<br />
          <strong>Consolato Italiano Las Vegas:</strong> +1 702 678 9100<br />
          <strong>Farnesina Emergenze 24/7:</strong> +39 06 3691 5<br />
          <strong>Lufthansa Italia (emergenze volo):</strong> 02 58584848
        </InfoBox>
      </div>
      </PageTransition>
    </div>
  );
}
