"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectData {
  title: string;
  desc: string;
  images: string[];
}

interface ProjectModalProps {
  project: keyof typeof data;
  onClose: () => void;
}

const data = {
  stockcast: {
    title: "StockCast",
    desc: "Real-time broadcasting system using Java Spring Boot.",
    images: [
      "/projects/stockcast-1.png",
      "/projects/stockcast-2.png",
    ],
  },
  carely: {
    title: "Carely",
    desc: "Healthcare appointment system with ML-based doctor matching.",
    images: [],
  },
} satisfies Record<string, ProjectData>;

export default function ProjectModal({
  project,
  onClose,
}: ProjectModalProps) {
  const p = data[project];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white rounded-xl p-6 max-w-2xl w-full"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <h2 className="text-2xl font-bold mb-4">{p.title}</h2>
          <p className="mb-4">{p.desc}</p>

          <div className="grid grid-cols-2 gap-4">
            {p.images.map((img) => (
              <Image
                key={img}
                src={img}
                alt={p.title}
                width={300}
                height={200}
                className="rounded"
              />
            ))}
          </div>

          <button
            onClick={onClose}
            className="mt-6 px-4 py-2 bg-black text-white rounded"
          >
            Close
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
