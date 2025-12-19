"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  tech: string;
  onClick: () => void;
}

export default function ProjectCard({
  title,
  tech,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      onClick={onClick}
      className="cursor-pointer border rounded-xl p-6 shadow"
    >
      <h3 className="font-semibold text-xl">{title}</h3>
      <p className="text-gray-600">{tech}</p>
    </motion.div>
  );
}
