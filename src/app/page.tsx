import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Homepage from "@/components/main/Homepage";
import Projects from "@/components/main/Projects";
import { images } from "@/constants/experience";

export default function Home() {
  return (
    <main>
      <div className="text-center h-[94vh]  bg-opacity-30">
        <Homepage />
      </div>
      <div id="about" className="text-center h-screen">
        {/* @ts-ignore */}
        <About images={images} />
      </div>
      <div id="projects" className="text-center h-screen">
        <Projects/>
      </div>
      <div id="contact" className="text-center xl:h-[85vh] lg:h-[85vh] md:h-[105vh] sm:h-[95vh] h-[95vh]">
        <Contact/>
      </div>
    </main>
  );
}
