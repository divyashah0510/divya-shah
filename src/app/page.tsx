import About from "@/components/main/About";
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
      <div id="contact" className="text-center h-[85vh]">
        Contact
      </div>
    </main>
  );
}
