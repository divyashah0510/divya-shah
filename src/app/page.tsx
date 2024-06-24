import Homepage from "@/components/main/Homepage";

export default function Home() {
  return (
    <main>
      <div className="text-center h-screen bg-white bg-opacity-30">
        <Homepage/>
      </div>
      <div id="about" className="text-center bg-black h-screen">
        About
      </div>
      <div id="projects" className="text-center bg-gray-400 h-screen">
        Projects
      </div>
      <div id="contact" className="text-center h-[94vh]">
        Contact
      </div>
    </main>
  );
}
