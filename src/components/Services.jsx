const SERVICES = [
  {
    title: "Klimaanlagen",
    desc: "Split- und Multisplit-Geräte, VRF-Systeme, mobile Lösungen — für Wohnräume, Büros und Gewerbe.",
    tag: "Wohnen · Gewerbe",
  },
  {
    title: "Kältetechnik",
    desc: "Begehbare Kühl- und Tiefkühlräume, gewerbliche Kühlmöbel, Prozesskühlung für die Industrie.",
    tag: "Gastro · Industrie",
  },
  {
    title: "Wärmepumpen",
    desc: "Luft-Wasser, Luft-Luft und Hybridsysteme. Nachhaltig heizen, kühlen und Warmwasser bereiten.",
    tag: "Förderfähig",
  },
  {
    title: "Wartung & Service",
    desc: "Inspektion nach F-Gase-Verordnung, Dichtheitsprüfungen und regelmäßige Funktionskontrollen.",
    tag: "F-Gase Zertifiziert",
  },
  {
    title: "Notdienst",
    desc: "Wenn die Kühlung kippt, sind wir da. 24 Stunden, 7 Tage — im Raum Cottbus, Berlin und darüber hinaus.",
    tag: "24 / 7",
  },
  {
    title: "Planung & Konzept",
    desc: "Individuelle Anlagenplanung für Neubau und Bestand — energieeffizient, BAFA-konform, dokumentiert.",
    tag: "Neubau · Bestand",
  },
];

export default function Services() {
  return (
    <section id="leistungen" className="section">
      <div className="section-head">
        <span className="label">
          <span className="num">I.</span>
          <span className="rule" />
          <span>Leistungen</span>
        </span>
        <div>
          <h2>
            Alles rund um <em>Kälte</em> &amp; <em>Klima</em>.
          </h2>
          <div className="head-side">
            <p>
              Sechs Disziplinen, ein Anspruch: solide gemacht, ehrlich
              dokumentiert, mit Verstand für Energie und Material.
            </p>
          </div>
        </div>
      </div>

      <div className="services">
        {SERVICES.map((s, i) => (
          <article key={s.title} className="service">
            <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-desc">{s.desc}</p>
            <span className="service-tag">{s.tag}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
