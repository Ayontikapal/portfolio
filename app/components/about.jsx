"use client";
import { motion } from "motion/react";
import Heart from "./assets/heart.svg";
import Chat from "./assets/chat-bubble.svg";
export default function About() {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "HTML",
    "CSS",
    "C++",
    "C",
    "Python",
  ];
  const item = {
    hidden: {
      opacity: 0,
      y: 70,
      scale: 0.7,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section id="about">
      <div className="max-w-[80vw] m-auto text-center relative">
        <motion.img
          initial={{ opacity: 0, x: -50, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            y: {
              delay: 0.8,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          src={Heart.src}
          alt="profile"
          className="w-45 h-45 absolute top-30 -left-5 rotate-40 max-lg:w-35 max-lg:h-35 max-md:w-25 max-md:h-25 max-sm:hidden"
        />
        <motion.img
          initial={{ opacity: 0, x: 50, scale: 0.7 }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            y: {
              delay: 0.8,
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          src={Chat.src}
          alt="profile"
          className="w-45 h-45 absolute top-30 -right-5 rotate-20 max-lg:w-35 max-lg:h-35 max-md:w-25 max-md:h-25 max-sm:hidden"
        />
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="text-5xl font-bold mb-6 text-accent"
        >
          ABOUT ME
        </motion.h2>
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
              },
            },
          }}
          className="flex items-center justify-center flex-wrap gap-4"
        >
          <motion.img
            variants={item}
            src="https://i.pinimg.com/736x/de/b6/bf/deb6bf49b31cc718890b49ce318afa9f.jpg"
            alt="profile"
            className="w-85 h-85 object-cover rounded-md"
          />
          <motion.p
            variants={item}
            className="text-text-secondary text-lg max-md:text-base"
          >
            Hi, My name is Ayontika Pal, I’m a passionate Computer Science
            student focused on building impactful and user-friendly web
            applications. I enjoy working with modern technologies like React
            and exploring full-stack development. Currently, I’m strengthening
            my problem-solving skills and aiming to build projects that combine
            creativity with real-world functionality.
          </motion.p>
          <div className="flex flex-col gap-5">
            <motion.div
              variants={item}
              className="font-bold text-2xl text-highlight max-md:text-xl"
            >
              Technologies and Languages I am proficient in:
            </motion.div>
            <div className="flex gap-2.5 flex-wrap justify-center">
              {skills.map((skill) => (
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.7 },
                    show: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        duration: 0.3
                      },
                    },
                  }}
                  key={skill}
                  className="py-2 px-4 color rounded-3xl mb-1 text-[0.9rem] cursor-pointer"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
