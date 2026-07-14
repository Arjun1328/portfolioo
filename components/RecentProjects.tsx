"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { getAssetPath } from "@/lib/utils";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A selection of my <span className="text-purple">best work</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            key={item.id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer
              title={item.liveDemo}
              href={item.liveDemo}
            >
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src={getAssetPath("/bg.png")} alt="bgimg" className="w-full h-full object-cover" />
                </div>
                <img
                  src={getAssetPath(item.img)}
                  alt="cover"
                  className="z-10 absolute bottom-0 max-h-full object-contain"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD]"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex items-center justify-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={getAssetPath(icon)} alt="icon" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={item.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#161a31]/80 border border-white/[0.1] text-xs font-bold text-white hover:border-purple/50 transition duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={item.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-purple border border-purple text-xs font-bold text-white hover:bg-purple/80 transition duration-200 flex items-center gap-1.5"
                  >
                    Live Demo
                    <FaLocationArrow className="w-3 h-3" color="#FFF" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
