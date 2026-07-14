import React from "react";
import { skillsData } from "@/data";
import { ScrollReveal } from "./ui/ScrollReveal";
import { SpotlightCard } from "./ui/SpotlightCard";

const Skills = () => {
  // Group skills by category for nice visual hierarchy
  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  const getCategoryTitle = (category: string) => {
    switch (category.toLowerCase()) {
      case "frontend":
        return "Frontend";
      case "backend":
        return "Backend";
      case "language":
        return "Languages";
      case "tool":
        return "Tools & Tech";
      default:
        return category;
    }
  };

  return (
    <section className="w-full py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <ScrollReveal>
          <h1 className="heading mb-12">
            Technical <span className="text-purple">Skills</span>
          </h1>
        </ScrollReveal>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {categories.map((category, idx) => (
            <ScrollReveal key={category} delay={idx * 0.1} yOffset={40}>
              <SpotlightCard
                className="p-8 h-full"
                glowColor="rgba(168, 85, 247, 0.12)"
                borderColor="rgba(168, 85, 247, 0.3)"
                style={{
                  background: "rgb(4,7,29)",
                  backgroundColor:
                    "linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/[0.1] pb-3">
                  {getCategoryTitle(category)}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {skillsData
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-xl bg-[#161a31]/60 border border-white/[0.05] text-white-100 font-semibold text-sm hover:border-purple hover:text-white transition duration-200"
                      >
                        {skill.name}
                      </div>
                    ))}
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
