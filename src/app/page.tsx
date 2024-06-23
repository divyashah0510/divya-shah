import Homepage from "@/components/main/Homepage";

export default function Home() {
  return (
    <main>
      <div id="about" className="text-center h-screen bg-white bg-opacity-30">
        <Homepage/>
      </div>
      <div id="projects" className="text-center bg-black h-screen">
        Projects
      </div>
      <div id="contact" className="text-center h-[94vh]">
        Contact
      </div>
    </main>
  );
}
