"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);

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
    <nav
      className="fixed w-full bg-bg border-b border-violet-950 z-10 top-0"
    >
      <div className="max-w-full m-auto py-5 px-10 flex justify-between items-center">
        <div className="font-bold text-[1.2rem] font-serif italic">Ayontika's Portfolio</div>

        <div className="flex gap-[2.7rem]">
          <a href="#home" className="navlink">Home</a>
          <a href="#about" className="navlink">About</a>
          <a href="#projects" className="navlink">Projects</a>
          <a href="#contact" className="navlink">Contact</a>
        </div>

        <div className="text-[1.2rem] hover:opacity-80">
          <button onClick={toggleTheme}>
            <i className={`fas ${isDark ? "fa-sun" : "fa-moon"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
