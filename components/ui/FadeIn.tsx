"use client";

import { motion } from "framer-motion";

export default function FadeIn({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // Starts invisible and 30px down
      whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
      viewport={{ once: true, margin: "-100px" }} // Triggers when scrolling near it
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}