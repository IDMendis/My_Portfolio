"use client";

export default function Navbar() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 px-8 py-4 flex justify-between">
      <h1 className="font-bold">Dinushi</h1>
      <div className="space-x-6">
        <button onClick={() => scrollTo("projects")}>Projects</button>
        <button onClick={() => scrollTo("skills")}>Skills</button>
        <button onClick={() => scrollTo("contact")}>Contact</button>
      </div>
    </nav>
  );
}
