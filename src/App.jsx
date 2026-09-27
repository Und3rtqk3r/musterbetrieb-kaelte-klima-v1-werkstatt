import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Profile from "./components/Profile.jsx";
import Gallery from "./components/Gallery.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";

export default function App() {
  useScrollReveal();
  return (
    <>
      <div className="page-frame" aria-hidden="true">
        <span className="bl" />
        <span className="br" />
      </div>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Profile />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
