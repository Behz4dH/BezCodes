"use client";

import { motion } from "framer-motion";
import CubeAnimation from "@/components/ui/ascii-cube";

export function CubeSeparator() {
  return (
    <section className="relative px-6 py-8 lg:px-12" aria-hidden="true">
      {/* Line numbers */}
      <div className="absolute left-0 top-0 hidden h-full select-none flex-col border-r border-[#30363d] bg-[#010409] px-3 py-8 text-right text-sm text-[#484f58] lg:flex">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i}>{i + 86}</div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-5xl lg:ml-20"
      >
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#30363d]" />
          <div className="text-xs text-[#484f58]">
            <span className="syntax-comment">{"// loading next module..."}</span>
          </div>
          <div className="h-px flex-1 bg-[#30363d]" />
        </div>

        <div className="flex justify-center overflow-hidden py-4">
          <div className="scale-[0.5] sm:scale-[0.6] md:scale-75 origin-center">
            <CubeAnimation
              wireframe={false}
              color={true}
              axis="xyz"
              speedA={0.02}
              speedB={0.015}
              speedC={0.01}
              edges={true}
              backfaceCulling={true}
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-[#30363d]" />
          <div className="text-xs text-[#484f58]">
            <span className="syntax-comment">{"// module loaded"}</span>
          </div>
          <div className="h-px flex-1 bg-[#30363d]" />
        </div>
      </motion.div>
    </section>
  );
}
