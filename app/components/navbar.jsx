"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isLight, setIsLight] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isLight;
    setIsLight(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme==="light"){
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);


  return (
    <nav
      className="fixed w-full bg-bg border-b border-border z-10"
    >
      <div className="max-w-full m-auto py-5 px-10 flex justify-between items-center">
        <div className="font-bold text-[1.2rem] font-serif italic">Ayontika's Portfolio</div>

        <div className="flex gap-[2.7rem]">
          <a href="#home" className="no-underline text-text text-[1.1rem] hover:text-highlight font-bold max-md:hidden">Home</a>
          <a href="#about" className="no-underline text-text text-[1.1rem] hover:text-highlight font-bold max-md:hidden">About</a>
          <a href="#projects" className="no-underline text-text text-[1.1rem] hover:text-highlight font-bold max-md:hidden">Projects</a>
          <a href="#contact" className="no-underline text-text text-[1.1rem] hover:text-highlight font-bold max-md:hidden">Contact</a>
        </div>

        <div className="text-[1.2rem] hover:opacity-80">
          <button onClick={toggleTheme}>
            <i className={`fas ${isLight ? "fa-moon" : "fa-sun"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
