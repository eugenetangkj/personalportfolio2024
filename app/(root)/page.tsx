import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className='h-96'>
        <h1>Hello</h1>
      </div>

    </main>
  )
}
