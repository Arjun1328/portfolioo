import React from "react";
import { certificationsData } from "@/data";
import { FaAward } from "react-icons/fa";

const Certifications = () => {
  return (
    <div className="py-20 w-full" id="certifications">
      <h1 className="heading">
        Licenses & <span className="text-purple">Certifications</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 max-w-7xl mx-auto px-4">
        {certificationsData.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col p-8 rounded-3xl border border-white/[0.1] bg-black-100 justify-between transition duration-300 hover:scale-[1.03] hover:border-purple/30 group"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(180deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center border border-purple/20 text-purple group-hover:scale-110 transition duration-300">
                  <FaAward className="text-2xl" />
                </div>
                <div>
                  <h3 className="text-white text-lg font-bold tracking-wide">
                    {cert.title}
                  </h3>
                  <p className="text-purple text-xs font-semibold tracking-wider uppercase mt-0.5">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <p className="text-white-100 text-sm leading-relaxed mb-6 font-medium">
                {cert.description}
              </p>
            </div>

            <div className="flex justify-between items-center border-t border-white/[0.05] pt-4 mt-auto">
              <span className="text-xs text-white-100/50 uppercase tracking-widest font-semibold">
                Issued Year
              </span>
              <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-[#161a31] border border-white/[0.1]">
                {cert.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
