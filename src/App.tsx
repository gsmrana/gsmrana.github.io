import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Hero } from "./components/sections/hero";
import { Skills } from "./components/sections/skills";
import { Experience } from "./components/sections/experience";
import { Projects } from "./components/sections/projects";
import { OpenSource } from "./components/sections/opensource";
import { Research } from "./components/sections/research";
import { Education } from "./components/sections/education";
import { Awards } from "./components/sections/awards";
import { Stats } from "./components/sections/stats";
import { Contact } from "./components/sections/contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <OpenSource />
        <Research />
        <Education />
        <Awards />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
