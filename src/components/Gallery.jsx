const ITEMS = [
  { code: "PRJ-014", year: "2024", title: "Klimaanlage Bürogebäude", place: "Cottbus",     hue: 205, size: "tall" },
  { code: "PRJ-022", year: "2024", title: "Kühlraum Gastronomie",    place: "Berlin",      hue: 28,  size: "wide" },
  { code: "PRJ-019", year: "2023", title: "Wärmepumpe Eigenheim",    place: "Lübben",      hue: 32,  size: "wide" },
  { code: "PRJ-028", year: "2025", title: "VRF-System Hotel",         place: "Hoyerswerda", hue: 198, size: "tall" },
  { code: "PRJ-031", year: "2025", title: "Tiefkühlanlage",            place: "Spremberg",   hue: 210, size: "med" },
  { code: "PRJ-024", year: "2024", title: "Loft-Klimatisierung",       place: "Berlin",      hue: 18,  size: "med" },
  { code: "PRJ-026", year: "2025", title: "Wärmepumpen-Kaskade",       place: "Forst",       hue: 24,  size: "med" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="section">
      <div className="section-head">
        <span className="label">
          <span className="num">III.</span>
          <span className="rule" />
          <span>Werkschau</span>
        </span>
        <div>
          <h2>
            Ausgewählte <em>Arbeiten</em><br />
            aus dem Werkbuch.
          </h2>
          <div className="head-side">
            <p>
              Eine kleine Auswahl der letzten Jahre — vom 4-m²-Kühlraum
              in einer Berliner Hinterhof-Bäckerei bis zur VRF-Klimatisierung
              eines Lausitzer Hotels.
            </p>
          </div>
        </div>
      </div>

      <div className="gallery">
        {ITEMS.map((it) => (
          <figure
            key={it.code}
            className={`g-item ${it.size}`}
            style={{ "--g-hue": it.hue }}
          >
            <div className="g-meta">
              <span>{it.code}</span>
              <span>{it.year}</span>
            </div>
            <figcaption className="g-caption">
              <div className="title">{it.title}</div>
              <div className="place">{it.place}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
