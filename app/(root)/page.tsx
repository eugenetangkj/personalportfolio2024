import Intro from "@/components/Intro"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <div className='h-96'>
        <h1>Hello</h1>
      </div>

    </main>
  )
}
