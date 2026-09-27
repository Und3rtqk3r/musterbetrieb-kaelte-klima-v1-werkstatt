import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontakt" className="section">
      <div className="section-head">
        <span className="label">
          <span className="num">IV.</span>
          <span className="rule" />
          <span>Kontakt</span>
        </span>
        <div>
          <h2>
            Lassen Sie uns <em>sprechen</em>.
          </h2>
          <div className="head-side">
            <p>
              Wir antworten in der Regel innerhalb eines Werktages. Bei
              akuten Ausfällen rufen Sie unsere Notdienst-Nummer an.
            </p>
          </div>
        </div>
      </div>

      <div className="contact">
        <aside className="contact-card">
          <div className="letterhead">
            <span>Musterbetrieb Kälte &amp; Klima GmbH</span>
            <span className="em">USt-Id DE…</span>
          </div>
          <ul>
            <li>
              <strong>Werkstatt &amp; Adresse</strong>
              <span className="value">Musterstraße 1 · 12345 Musterstadt</span>
            </li>
            <li>
              <strong>Telefon</strong>
              <a href="tel:+49 000 000000">0000 / 00 00 00</a>
            </li>
            <li>
              <strong>Notdienst (24 / 7)</strong>
              <a href="tel:+49 000 000001">0000 / 00 00 01</a>
            </li>
            <li>
              <strong>E-Post</strong>
              <a href="mailto:info@musterbetrieb-kaelte-klima.example">
                info@musterbetrieb-kaelte-klima.example
              </a>
            </li>
          </ul>
          <div className="seal">
            <span>Meisterbetrieb · HWK Musterstadt</span>
            <span className="roman">Est. MCMXXVII</span>
          </div>
        </aside>

        <form
          className="contact-form"
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        >
          <div className="form-label">
            <span>Anfrageformular № 01</span>
          </div>

          <div className="form-row">
            <label>
              <span>Name</span>
              <input type="text" required placeholder="Ihr vollständiger Name" />
            </label>
            <label>
              <span>E-Post</span>
              <input type="email" required placeholder="ihre@adresse.de" />
            </label>
          </div>

          <div className="form-row full">
            <label>
              <span>Worum geht es?</span>
              <textarea rows="3" required placeholder="Kurze Beschreibung Ihres Anliegens" />
            </label>
          </div>

          {sent ? (
            <p className="form-success">
              Vielen Dank. Wir melden uns binnen eines Werktages.
            </p>
          ) : (
            <div className="actions">
              <span className="note">Antwort innerhalb 24h · vertraulich</span>
              <button type="submit" className="btn btn-primary">
                Anfrage senden <span className="arrow">→</span>
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
