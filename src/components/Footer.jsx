export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div>
          <div className="footer-brand">
            Musterbetrieb <span className="amp">&amp;</span> Söhne
          </div>
          <div className="footer-brand-note">
            Kälte · Klima · Wärme — gegründet anno MCMXXVII
          </div>
        </div>
        <div className="footer-col">
          <h4>Werkstatt</h4>
          <ul>
            <li>Musterstraße 1</li>
            <li>12345 Musterstadt</li>
            <li>Mo – Fr · 7 – 17 Uhr</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Direkt</h4>
          <ul>
            <li><a href="tel:+49 000 000000">0000 / 00 00 00</a></li>
            <li><a href="mailto:info@musterbetrieb-kaelte-klima.example">info@musterbetrieb-kaelte-klima.example</a></li>
            <li><a href="#kontakt">Anfrageformular</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bar">
        <span>© {new Date().getFullYear()} · Musterbetrieb Kälte &amp; Klima · Cottbus</span>
        <div style={{ display: "flex", gap: "1.6rem", flexWrap: "wrap" }}>
          <a href="#impressum">Impressum</a>
          <a href="#datenschutz">Datenschutz</a>
          <a href="#agb">AGB</a>
        </div>
      </div>
    </footer>
  );
}
