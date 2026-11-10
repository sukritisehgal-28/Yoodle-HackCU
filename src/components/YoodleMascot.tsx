"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { withBasePath } from "@/lib/utils/base-path";

export function YoodleMascotSmall({ className = "" }: { className?: string }) {
  return (
    <Image
      src={withBasePath("/yoodle-logo.png")}
      alt="Yoodle mascot"
      width={40}
      height={40}
      className={className}
    />
  );
}

export function YoodleMascotLarge({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, type: "spring" }}
    >
      <Image
        src={withBasePath("/yoodle-logo.png")}
        alt="Yoodle mascot"
        width={300}
        height={300}
        className="w-full h-auto mix-blend-multiply"
      />
    </motion.div>
  );
}
