"use client";
import { useLayoutEffect, useState } from "react";
import styles from "./navbar.module.css";

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

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme==="light"){
      document.documentElement.classList.add("light");
      setIsLight(true);
    }
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        <div className={styles.logo}>Ayontika's Portfolio</div>

        <div className={styles.navLinks}>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className={styles.modeSwitch}>
          <button onClick={toggleTheme} className={styles.modeButton}>
            <i className={`fas ${isLight ? "fa-moon" : "fa-sun"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}