"use client";

import { useRef } from "react";
import { TextRoll } from "@/components/ui/text-roll";
import { Star, Users, Briefcase } from "lucide-react";
import { useInView } from "framer-motion";

const metrics = [
  { label: "Years of experience", value: "15+", icon: <Briefcase className="w-5 h-5 mb-3 text-[#E9D6A9]/80" /> },
  { label: "Customers", value: "1000+", icon: <Users className="w-5 h-5 mb-3 text-[#E9D6A9]/80" /> },
  { label: "Stars rating", value: "4.7K", icon: <Star className="w-5 h-5 mb-3 text-[#E9D6A9]/80" /> },
];

export default function TextRollStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="bg-[var(--deep)] text-white section-pad border-y border-[#3d4239]">
      <div className="flex min-h-[30vh] flex-col items-center justify-center gap-12 px-6">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3 sm:gap-16">
          {metrics.map((metric, i) => (
            <div key={metric.label} className="flex flex-col items-center justify-center">
              {metric.icon}
              <p className="font-serif text-5xl tabular-nums tracking-tighter text-[#E9D6A9] sm:text-6xl md:text-7xl">
                {isInView ? (
                  <TextRoll
                    duration={0.4}
                    getEnterDelay={(j) => i * 0.15 + j * 0.04}
                  >
                    {metric.value}
                  </TextRoll>
                ) : (
                  <span className="opacity-0">{metric.value}</span>
                )}
              </p>
              <p className="mt-4 text-sm font-medium tracking-widest uppercase text-white/60">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
