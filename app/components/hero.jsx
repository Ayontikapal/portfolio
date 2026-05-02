"use client";
import profileImage from "./assets/profile_image.jpeg";
import { motion } from "motion/react";

export default function Hero() {
  const item = {
    hidden: {
      scale: 0.7,
      opacity: 0,
      y: 50
    },
    show: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section
      id="home"
      className="w-[98vw] flex items-center justify-center min-h-screen"
    >
      <div className="text-center flex items-center gap-24 max-lg:flex-col-reverse max-lg:gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                type: "spring",
                stiffness: 80,
                damping: 30,
                staggerChildren: 0.3,
                delayChildren: 0.3,
              },
            },
          }}
          className="flex flex-col flex-1 p-8 gap-6"
        >
          <motion.h1 
            variants={item}
            className="text-6xl font-bold max-lg:text-5xl"
          >
            Hi, I'm <span className="text-accent">Ayontika Pal</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="text-3xl text-text max-lg:text-2xl"
          >
            CSE undergrad | Aspiring to be a Full Stack Developer
          </motion.p>
          <motion.p variants={item} className="text-xl max-lg:text-lg">
            Passionate about creating impactful digital solutions <br></br>and
            continuously learning new technologies.
          </motion.p>
          <motion.div
            variants={item}
            className="flex justify-center flex-wrap gap-5 mt-4"
          >
            <motion.button
              whileHover={{ scale: 1.04}}
              whileTap={{ scale: 0.97 }}
              className="button"
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="button"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact Me
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
          className="w-102 h-102 inline-block p-[4px_4px_0px] rounded-full bg-linear-270 from-text via-highlight to-accent bg-size-[400%_400%] animate-gradientRotate max-lg:w-82 max-lg:h-82 max-lg:mt-12"
        >
          <img
            src={profileImage.src}
            alt="profile"
            className="w-100 h-100 rounded-full object-cover max-lg:w-80 max-lg:h-80"
          />
        </motion.div>
      </div>
    </section>
  );
}
