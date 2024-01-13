import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Volunteering from "@/components/Volunteering";
import Contact from "@/components/Contact";
import NavbarNew from "@/components/NavbarNew";

export default function Home() {
  return (
    <main>
      

  <div className="text-center fixed">
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-right-example" data-drawer-show="drawer-right-example" data-drawer-placement="right" aria-controls="drawer-right-example">
    Show right drawer
    </button>
  </div>





      <NavbarNew />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Volunteering />
      <Contact />
      <div className='h-8'></div>
    </main>
  )
}
