import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — ORBIS Italia",
  description: "Informativa sulla privacy e trattamento dei dati personali di ORBIS Italia ai sensi del GDPR.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <section className="relative z-1 pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
              <span>/</span>
              <span className="text-[var(--color-cyan)]">Privacy Policy</span>
            </div>

            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Documenti legali
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-black tracking-[4px] mb-4">
              Privacy Policy
            </h1>
            <p className="text-[var(--color-muted)] text-base">
              Informativa ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR)<br />
              Ultimo aggiornamento: Marzo 2026
            </p>
          </div>

          <div className="space-y-12 text-[var(--color-muted)] text-[15px] leading-relaxed">

            {/* 1 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                1. Titolare del Trattamento
              </h2>
              <div className="p-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl">
                <p className="text-sm">
                  <strong className="text-[var(--color-white)]">AimXpert di Marco Eugenio Monaco</strong><br />
                  P.IVA: 04822030401<br />
                  Email: <span className="text-[var(--color-cyan)]">privacy@orbis-italia.it</span>
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                2. Dati Raccolti
              </h2>
              <p className="mb-4">
                Nell'ambito dell'erogazione dei servizi ORBIS, possiamo raccogliere le seguenti categorie di dati personali:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Dati identificativi:</strong> nome, cognome, ragione sociale, codice fiscale, partita IVA.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Dati di contatto:</strong> email, numero di telefono, indirizzo.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Dati di accesso:</strong> credenziali, log di accesso, indirizzo IP.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Dati di utilizzo:</strong> informazioni sulle funzionalità utilizzate, prenotazioni, ticket.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Dati di navigazione:</strong> cookie tecnici, dati di sessione, tipo di browser e dispositivo.</span></li>
              </ul>
            </div>

            {/* 3 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                3. Finalità del Trattamento
              </h2>
              <p className="mb-4">I dati personali sono trattati per le seguenti finalità:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Esecuzione contrattuale:</strong> erogazione dei servizi Orbis Hub e Orbis Repair, gestione dell'account, supporto tecnico.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Obblighi di legge:</strong> adempimenti fiscali, contabili e di legge.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Legittimo interesse:</strong> sicurezza della piattaforma, prevenzione frodi, analisi aggregate per il miglioramento del servizio.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Consenso:</strong> invio di comunicazioni promozionali (solo con esplicito consenso dell'utente).</span></li>
              </ul>
            </div>

            {/* 4 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                4. Base Giuridica del Trattamento
              </h2>
              <p>
                Il trattamento dei dati si basa su: esecuzione del contratto (art. 6.1.b GDPR), adempimento di
                obblighi legali (art. 6.1.c GDPR), legittimo interesse del titolare (art. 6.1.f GDPR) e,
                ove applicabile, consenso dell'interessato (art. 6.1.a GDPR).
              </p>
            </div>

            {/* 5 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                5. Condivisione e Trasferimento Dati
              </h2>
              <p className="mb-4">
                I dati personali <strong className="text-[var(--color-white)]">non vengono venduti a terzi</strong>. Possono essere condivisi con:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Fornitori di servizi:</strong> hosting (DigitalOcean, UE/USA), servizi email, gateway di pagamento — in qualità di Responsabili del Trattamento.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Piattaforme terze:</strong> Discord, Telegram, Meta/WhatsApp — limitatamente ai dati necessari per l'integrazione dei canali attivati dal cliente.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Autorità competenti:</strong> quando richiesto per legge.</span></li>
              </ul>
              <p>
                Per i trasferimenti verso paesi extra-UE, si applicano le garanzie previste dal GDPR
                (Clausole Contrattuali Standard o decisioni di adeguatezza della Commissione Europea).
              </p>
            </div>

            {/* 6 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                6. Conservazione dei Dati
              </h2>
              <p>
                I dati personali vengono conservati per il tempo strettamente necessario alle finalità per cui sono stati
                raccolti. In particolare: i dati contrattuali per <strong className="text-[var(--color-white)]">10 anni</strong> dalla
                cessazione del rapporto (obblighi fiscali), i dati di accesso e log per <strong className="text-[var(--color-white)]">12 mesi</strong>,
                i dati di marketing fino alla revoca del consenso. Al termine del periodo di conservazione,
                i dati vengono cancellati o resi anonimi in modo irreversibile.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                7. Diritti dell'Interessato
              </h2>
              <p className="mb-4">
                Ai sensi degli artt. 15-22 del GDPR, l'utente ha diritto di:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Accesso:</strong> ottenere conferma del trattamento e copia dei dati.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Rettifica:</strong> correggere dati inesatti o incompleti.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Cancellazione:</strong> richiedere la cancellazione dei dati (diritto all'oblio).</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Limitazione:</strong> limitare il trattamento in determinate circostanze.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Portabilità:</strong> ricevere i dati in formato strutturato e leggibile.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Opposizione:</strong> opporsi al trattamento per motivi legittimi.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span><strong className="text-[var(--color-white)]">Reclamo:</strong> proporre reclamo al Garante per la Protezione dei Dati Personali (www.garanteprivacy.it).</span></li>
              </ul>
              <p>
                Per esercitare i propri diritti, scrivere a <span className="text-[var(--color-cyan)]">privacy@orbis-italia.it</span>.
                Risponderemo entro 30 giorni dalla ricezione della richiesta.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                8. Cookie
              </h2>
              <p className="mb-4">
                Il sito ORBIS utilizza esclusivamente <strong className="text-[var(--color-white)]">cookie tecnici</strong> necessari
                al funzionamento della piattaforma. Non vengono utilizzati cookie di profilazione o di marketing
                di terze parti.
              </p>
              <p>
                I cookie tecnici non richiedono il consenso dell'utente ai sensi dell'art. 122 del Codice Privacy
                e del Provvedimento del Garante n. 229/2014.
              </p>
            </div>

            {/* 9 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                9. Sicurezza
              </h2>
              <p>
                Adottiamo misure tecniche e organizzative appropriate per proteggere i dati personali da accesso
                non autorizzato, perdita, distruzione o alterazione, tra cui: crittografia dei dati in transito (TLS/SSL),
                accesso ai sistemi limitato e protetto da autenticazione, backup regolari e monitoraggio continuo.
              </p>
            </div>

            {/* 10 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                10. Modifiche alla Privacy Policy
              </h2>
              <p>
                La presente informativa può essere aggiornata periodicamente. In caso di modifiche sostanziali,
                ne daremo comunicazione agli utenti tramite email o avviso sulla piattaforma.
                La data dell'ultimo aggiornamento è indicata in cima a questa pagina.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[rgba(0,87,255,0.06)] border border-[rgba(0,87,255,0.2)] rounded-2xl p-8 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-3">
                Hai domande sulla privacy?
              </h2>
              <p className="mb-5">
                Scrivi a <span className="text-[var(--color-cyan)]">privacy@orbis-italia.it</span> per qualsiasi richiesta.
              </p>
              <Link
                href="/contatti"
                className="inline-block bg-[var(--color-blue)] text-white px-8 py-3.5 rounded-xl text-[15px] font-bold no-underline shadow-[0_4px_20px_rgba(0,87,255,0.3)] hover:bg-[#0045CC] hover:-translate-y-0.5 transition-all"
              >
                Contattaci
              </Link>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
