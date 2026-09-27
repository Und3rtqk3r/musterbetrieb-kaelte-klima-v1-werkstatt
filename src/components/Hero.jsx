import PenguinStamp from "./PenguinStamp.jsx";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-top">
        <span className="hero-eyebrow">
          <span className="dot" />
          <span>Meisterbetrieb · Cottbus</span>
          <span className="rule" />
        </span>
        <div className="hero-coords">
          <div>Lausitz · Brandenburg · DE</div>
          <div>N 51°45′22″ · E 14°19′58″</div>
        </div>
      </div>

      <div className="stamp" aria-hidden="true">
        <svg className="stamp-arc" viewBox="0 0 200 200">
          <defs>
            <path id="arc-top" d="M 26 100 A 74 74 0 0 1 174 100" />
            <path id="arc-bot" d="M 26 100 A 74 74 0 0 0 174 100" />
          </defs>
          <text
            fontFamily="Fraunces, serif"
            fontStyle="italic"
            fontSize="13"
            letterSpacing="3"
            fill="currentColor"
          >
            <textPath href="#arc-top" startOffset="50%" textAnchor="middle">
              MEISTERBETRIEB · LAUSITZ
            </textPath>
          </text>
          <text
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="3.5"
            fill="currentColor"
          >
            <textPath href="#arc-bot" startOffset="50%" textAnchor="middle">
              KÄLTE · WÄRME · KLIMA
            </textPath>
          </text>
        </svg>
        <div className="stamp-inner">
          <PenguinStamp size={36} />
          <div className="stamp-roman">Anno</div>
          <div className="stamp-num">MCMXXVII</div>
        </div>
      </div>

      <div className="hero-main">
        <h1 className="hero-title">
          <span className="line">Kälte</span>
          <span className="line indent">
            <span className="amp">&amp;</span>
            <span className="italic">Klima</span>
            <span className="stop">.</span>
          </span>
        </h1>

        <div className="hero-aside">
          <p className="hero-strap">
            Drei Generationen <em>Handwerk</em>.<br />
            Ein Haus.<br />
            Kein Effekt — nur perfekte Temperatur.
          </p>
          <p className="hero-lead">
            Seit dem Jahre <span className="num">1927</span> bauen, warten und planen
            wir Kälte- und Klimatechnik — vom Gastronomiekühlraum in Cottbus
            bis zur Wärmepumpe in einer Berliner Altbauwohnung.
          </p>
          <div className="hero-actions">
            <a href="#kontakt" className="btn btn-primary">
              Beratung anfragen <span className="arrow">→</span>
            </a>
            <a href="#leistungen" className="link-arrow">
              Was wir machen
            </a>
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <span className="scroll">scroll</span>
        <span className="center">
          Notdienst <em>24 / 7</em> · Cottbus &amp; Berlin · 0000 / 00 00 00
        </span>
        <span>№ 001 / IV</span>
      </div>
    </section>
  );
}
