import React from "react";
import { skillsData } from "@/data";

const Skills = () => {
  // Group skills by category for nice visual hierarchy
  const categories = Array.from(new Set(skillsData.map((s) => s.category)));

  return (
    <section className="w-full py-20 relative overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="heading mb-12">
          Technical <span className="text-purple">Skills</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {categories.map((category) => (
            <div
              key={category}
              className="p-8 rounded-3xl border border-white/[0.1] relative overflow-hidden transition-all duration-300 hover:border-purple/30 group"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              }}
            >
              {/* Highlight background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple/10 rounded-full filter blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-b border-white/[0.1] pb-3">
                {category}s
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
