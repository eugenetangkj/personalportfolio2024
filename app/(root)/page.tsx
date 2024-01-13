import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Volunteering from "@/components/Volunteering";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Volunteering />
    

    </main>
  )
}
