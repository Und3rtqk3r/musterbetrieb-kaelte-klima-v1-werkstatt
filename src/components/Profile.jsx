export default function Profile() {
  return (
    <section id="profil" className="section">
      <div className="section-head">
        <span className="label">
          <span className="num">II.</span>
          <span className="rule" />
          <span>Profil</span>
        </span>
        <div>
          <h2>
            Bewährte <em>Handwerkskunst</em><br />
            seit MCMXXVII.
          </h2>
        </div>
      </div>

      <div className="profile">
        <div className="profile-text">
          <p>
            Gegründet 1927 in Cottbus, bestehen wir heute in der dritten
            Generation. Was als kleine Werkstatt für Kühlanlagen begann, ist
            ein Meisterbetrieb mit zwei Standbeinen geworden: tiefes Wissen
            für gewerbliche Kälte, moderne Lösungen für Klima und Wärme.
          </p>
          <p>
            Was wir aus fast einem Jahrhundert mitgenommen haben, ist die
            Überzeugung, dass gutes Handwerk Zeit braucht — und sich
            auszahlt.
          </p>

          <div className="profile-marginalia">
            Stammhaus Cottbus, Filiale Berlin-Schöneberg.<br />
            Sechs Monteure, zwei Meister, ein Lehrling.
          </div>
        </div>

        <figure className="profile-quote">
          <q>
            Ehrlich, pünktlich, sauber gearbeitet —
            so soll Handwerk sein, und so machen wir es seit drei Generationen.
          </q>
          <figcaption className="author">
            <span>M. Krüger · Bauherr · Cottbus</span>
          </figcaption>
        </figure>
      </div>

      <div className="profile-stats">
        <div>
          <div className="pstat-n">98<span className="suf">+</span></div>
          <div className="pstat-l">Jahre Erfahrung</div>
        </div>
        <div>
          <div className="pstat-n">III</div>
          <div className="pstat-l">Generationen</div>
        </div>
        <div>
          <div className="pstat-n">500<span className="suf">/a</span></div>
          <div className="pstat-l">Projekte pro Jahr</div>
        </div>
        <div>
          <div className="pstat-n">4,9<span className="suf">★</span></div>
          <div className="pstat-l">Kundenbewertung</div>
        </div>
      </div>
    </section>
  );
}
