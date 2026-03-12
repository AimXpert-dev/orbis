import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Termini e Condizioni — ORBIS Italia",
  description: "Termini e condizioni di utilizzo dei servizi ORBIS Italia. Leggi le condizioni che regolano l'uso delle nostre piattaforme.",
};

export default function TerminiPage() {
  return (
    <>
      <Navbar />

      <section className="relative z-1 pt-32 pb-16 px-6 md:px-16">
        <div className="max-w-[860px] mx-auto">
          {/* Header */}
          <div className="mb-14">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs text-[var(--color-muted)] mb-8">
              <Link href="/" className="hover:text-[var(--color-white)] transition-colors no-underline">Home</Link>
              <span>/</span>
              <span className="text-[var(--color-cyan)]">Termini e Condizioni</span>
            </div>

            <div className="text-[11px] font-bold tracking-[4px] text-[var(--color-cyan)] uppercase mb-4">
              Documenti legali
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[clamp(28px,4vw,44px)] font-black tracking-[4px] mb-4">
              Termini e Condizioni
            </h1>
            <p className="text-[var(--color-muted)] text-base">
              Ultimo aggiornamento: Marzo 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-[var(--color-muted)] text-[15px] leading-relaxed">

            {/* 1 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                1. Titolare del Servizio
              </h2>
              <p>
                I presenti Termini e Condizioni regolano l'utilizzo dei servizi offerti da <strong className="text-[var(--color-white)]">ORBIS Italia</strong>,
                con sede legale in Italia.
              </p>
              <div className="mt-4 p-4 bg-[var(--color-bg)] border border-[var(--color-border)] rounded-xl">
                <p className="text-sm">
                  <strong className="text-[var(--color-white)]">Ragione sociale:</strong> AimXpert di Marco Eugenio Monaco<br />
                  <strong className="text-[var(--color-white)]">P.IVA:</strong> 04822030401<br />
                  <strong className="text-[var(--color-white)]">Email:</strong> info@orbis-italia.it
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                2. Descrizione del Servizio
              </h2>
              <p className="mb-4">
                ORBIS Italia fornisce soluzioni software in modalità SaaS (Software as a Service) per le imprese, tra cui:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span>
                  <span><strong className="text-[var(--color-white)]">Orbis Sistema:</strong> piattaforma per la gestione di prenotazioni e comunicazioni multicanale (Discord, Telegram, App Mobile, WhatsApp).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span>
                  <span><strong className="text-[var(--color-white)]">Orbis Gestionale:</strong> software gestionale per contabilità, fatturazione, gestione clienti, fornitori e inventario.</span>
                </li>
              </ul>
              <p className="mt-4">
                I servizi vengono erogati previa stipula di un contratto specifico e pagamento del corrispettivo concordato.
              </p>
            </div>

            {/* 3 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                3. Condizioni di Utilizzo
              </h2>
              <p className="mb-4">
                Accedendo e utilizzando i servizi ORBIS, l'utente dichiara di avere almeno 18 anni d'età
                e di agire nell'ambito di una attività professionale o imprenditoriale.
              </p>
              <p className="mb-4">L'utente si impegna a:</p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Fornire informazioni veritiere e aggiornate in fase di registrazione e contrattualizzazione.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Non utilizzare i servizi per scopi illegali, fraudolenti o contrari all'ordine pubblico.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Non cedere, sublicenziare o rivendere i servizi a terzi senza autorizzazione scritta.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Mantenere riservate le credenziali di accesso e notificare immediatamente qualsiasi accesso non autorizzato.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Rispettare la normativa vigente in materia di privacy e protezione dei dati personali dei propri clienti.</span></li>
              </ul>
              <p>
                ORBIS Italia si riserva il diritto di sospendere o terminare l'accesso ai servizi in caso di violazione
                dei presenti termini, senza obbligo di preavviso e senza rimborso del corrispettivo già versato.
              </p>
            </div>

            {/* 4 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                4. Proprietà Intellettuale
              </h2>
              <p className="mb-4">
                Tutti i contenuti, il codice sorgente, il design, i loghi, i marchi e le funzionalità dei servizi ORBIS
                sono di proprietà esclusiva di ORBIS Italia o dei suoi licenziatari e sono protetti dalla normativa
                italiana ed europea in materia di proprietà intellettuale.
              </p>
              <p className="mb-4">
                L'utente riceve una licenza limitata, non esclusiva, non trasferibile per utilizzare i servizi
                esclusivamente per le proprie finalità aziendali, nei limiti del contratto sottoscritto.
              </p>
              <p>
                È espressamente vietato copiare, modificare, distribuire, vendere o creare opere derivate
                basate sui servizi ORBIS senza esplicita autorizzazione scritta.
              </p>
            </div>

            {/* 5 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                5. Limitazione di Responsabilità
              </h2>
              <p className="mb-4">
                ORBIS Italia si impegna a garantire la continuità dei servizi con standard elevati di affidabilità,
                ma non può essere ritenuta responsabile per:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Interruzioni di servizio causate da manutenzioni programmate, guasti di terze parti o cause di forza maggiore.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Perdita di dati derivante da utilizzo improprio del servizio da parte dell'utente.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Danni indiretti, consequenziali o perdite di profitto dell'utente o di terzi.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Malfunzionamenti di piattaforme terze (Discord, Telegram, WhatsApp, Apple App Store, Google Play).</span></li>
              </ul>
              <p>
                In ogni caso, la responsabilità massima di ORBIS Italia non potrà eccedere l'importo
                versato dal cliente negli ultimi tre mesi di servizio.
              </p>
            </div>

            {/* 6 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                6. Trattamento Dati Personali (GDPR)
              </h2>
              <p className="mb-4">
                ORBIS Italia tratta i dati personali degli utenti in qualità di Titolare del Trattamento,
                nel rispetto del Regolamento (UE) 2016/679 (GDPR) e del D.Lgs. 196/2003 come modificato
                dal D.Lgs. 101/2018.
              </p>
              <p className="mb-4">
                I dati raccolti durante l'utilizzo dei servizi vengono trattati per:
              </p>
              <ul className="space-y-2 ml-4 mb-4">
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Erogazione dei servizi contrattuali.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Adempimenti fiscali e contabili.</span></li>
                <li className="flex items-start gap-2.5"><span className="text-[var(--color-cyan)] font-bold mt-0.5">·</span><span>Comunicazioni relative al servizio e agli aggiornamenti.</span></li>
              </ul>
              <p className="mb-4">
                I dati non vengono ceduti a terzi per fini commerciali. L'utente ha diritto di accesso,
                rettifica, cancellazione, limitazione e portabilità dei propri dati, nonché il diritto
                di opporsi al trattamento, esercitabili scrivendo a <span className="text-[var(--color-cyan)]">privacy@orbis-italia.it</span>.
              </p>
              <p>
                Per le piattaforme terze integrate nel servizio (Discord, Telegram, Meta/WhatsApp),
                si applicano le rispettive informative sulla privacy.
              </p>
            </div>

            {/* 7 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                7. Modifiche ai Termini
              </h2>
              <p className="mb-4">
                ORBIS Italia si riserva il diritto di modificare i presenti Termini e Condizioni in qualsiasi momento.
                Le modifiche saranno comunicate agli utenti tramite email o avviso sulla piattaforma con almeno
                <strong className="text-[var(--color-white)]"> 30 giorni di preavviso</strong>.
              </p>
              <p>
                Il proseguimento nell'utilizzo dei servizi dopo la data di entrata in vigore delle modifiche
                costituisce accettazione dei nuovi termini. In caso di mancata accettazione, l'utente ha diritto
                di recedere dal contratto entro il termine di preavviso comunicato.
              </p>
            </div>

            {/* 8 */}
            <div className="bg-[var(--color-bg2)] border border-[var(--color-border)] rounded-2xl p-8">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-5">
                8. Legge Applicabile e Foro Competente
              </h2>
              <p className="mb-4">
                I presenti Termini e Condizioni sono regolati dalla <strong className="text-[var(--color-white)]">legge italiana</strong>.
                Per qualsiasi controversia relativa all'interpretazione, validità o esecuzione dei presenti termini,
                le parti si impegnano preliminarmente a ricercare una soluzione amichevole.
              </p>
              <p>
                In assenza di accordo amichevole, per le controversie tra imprese sarà competente in via esclusiva
                il <strong className="text-[var(--color-white)]">Foro di Bologna</strong>.
                Per i consumatori, sarà competente il foro del luogo di residenza o domicilio del consumatore
                ai sensi del Codice del Consumo (D.Lgs. 206/2005).
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[rgba(0,87,255,0.06)] border border-[rgba(0,87,255,0.2)] rounded-2xl p-8 text-center">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[2px] text-[var(--color-white)] mb-3">
                Hai domande?
              </h2>
              <p className="mb-5">
                Per qualsiasi chiarimento sui presenti Termini e Condizioni, contattaci.
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
