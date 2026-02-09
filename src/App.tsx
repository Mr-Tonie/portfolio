import Header from "./sections/Header";
import Summary from "./sections/Summary";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Domain from "./sections/Domain";
import Values from "./sections/Values";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <main className="container">
      <Header />
      <Summary />
      <Skills />
      <Projects />
      <Education />
      <Domain />
      <Values />
      <Contact />
    </main>
  );
}

