"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
  stiffness: 90,
  damping: 30
})

const toggleTheme = () => {
  setIsDark(prev => {
    const newTheme = !prev;
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    return newTheme;
  });
};

useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    setIsDark(true);
  }
}, []);

  return (
    <motion.div
    initial={{y:-20, opacity:0}}
    animate={{y:0, opacity:1}}
    transition={{
      type:"spring",
      stiffness:80,
      damping:30,
      duration:1}}
      className="fixed w-full bg-bg border-b border-violet-950 z-10 top-0"
    >
      <div className="absolute bottom-0 w-full h-0.75">
    <motion.div
      style={{ scaleX }}
      className="h-full bg-accent origin-left"
    />
  </div>
      <div className="max-w-full m-auto py-5 px-10 flex justify-between items-center">
        <div
        className="font-bold text-[1.2rem] font-serif italic">Ayontika's Portfolio</div>

        <div className="flex gap-[2.7rem]">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: -10},
                show: { opacity: 1, y: 0 }
              }}
              whileHover={{ y: -2, scale:1.1}}
            >
              <a href={`#${item.toLowerCase()}`} className="navlink">
                {item}
              </a>
            </motion.div>
          ))}

        </div>

        <div className="text-[1.2rem] hover:opacity-80">
          <button onClick={toggleTheme}>
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
