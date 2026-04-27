"use client";
import getProjects from "./data/projects.js";
import { motion } from "motion/react";

export default function Projects() {
  const projects = getProjects();

  return (
    <section id="projects">
      <div className="max-w-275 m-auto px-5">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-center text-5xl mb-8 font-bold text-accent"
        >
          PROJECTS
        </motion.h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.3
              },
            },
          }}
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6.5"
        >
          {projects.map((proj) => (
            <motion.div
              key={proj.id}
              whileHover={{scale:1.05}}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 70,
                    damping: 20
                  },
                },
              }}
              className="flex flex-col justify-between p-5 bg-skill-bg rounded-xl hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
            >
              <div className="flex items-center justify-between mb-2.5">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <div
                 className="text-center w-9.5 h-9.5 text-[1.4rem] text-text bg-icon rounded-[5px]">
                  <i className="fa-solid fa-arrow-up-right-dots"></i>
                </div>
              </div>
              <p className="text-text-secondary mb-3.5">{proj.desc}</p>

              <div className="text-sm mb-3.75 flex flex-wrap">
                {proj.tech.map((t, i) => (
                  <motion.div initial={{scale:1}} 
                  whileHover={{ scale: 1.2, rotate: 10 }}
  transition={{ type: "spring", stiffness: 200 }}
   key={i} className="bg-conic from-red-300 to-purple-300 p-1.25 rounded-full m-1">
                    <img
                    src={t.src}
                    alt="tech"
                    className="w-6 h-6"
                  />
                  </motion.div>
                  
                ))}
              </div>

              <div className="flex gap-3">
                <a className="link" href={proj.github} target="_blank">
                  GitHub
                </a>
                <a className="link" href={proj.live} target="_blank">
                  Live
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
