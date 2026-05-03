import { Hero } from "./components/Hero";
import { Pulsent } from "./components/Pulsent";
import { Role } from "./components/Role";
import { About } from "./components/About";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Pulsent />
      <Role />
      <About />
    </main>
  );
}
