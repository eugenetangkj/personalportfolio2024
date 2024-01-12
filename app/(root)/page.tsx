import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <div className='h-96'>
        <h1>Hello</h1>
      </div>

    </main>
  )
}
