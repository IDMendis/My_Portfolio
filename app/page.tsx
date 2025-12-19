import Navbar from "@/components/Navbar";
import Projects from "@/components/sections/Projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Projects />
      </main>
    </>
  );
}
