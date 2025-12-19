"use client";

import { useState } from "react";
import ProjectCard from "../ProjectCard";
import ProjectModal from "../ProjectModal";

type ProjectKey = "stockcast" | "carely";

export default function Projects() {
  const [selected, setSelected] = useState<ProjectKey | null>(null);

  return (
    <section id="projects" className="px-8 py-20">
      <h2 className="text-3xl font-bold mb-10">Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <ProjectCard
          title="StockCast"
          tech="Java, Spring Boot"
          onClick={() => setSelected("stockcast")}
        />

        <ProjectCard
          title="Carely"
          tech="MERN, ML"
          onClick={() => setSelected("carely")}
        />
      </div>

      {selected && (
        <ProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
