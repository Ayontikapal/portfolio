"use client";
import styles from "./project.module.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };

    fetchProjects();
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.grid}>
          {projects.map((proj) => (
            <div key={proj.id} className={styles.card}>
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>

              <div className={styles.tech}>
                {proj.tech.map((t) => (
                  <span key={t} className={styles.techItem}>{t}</span>
                ))}
              </div>

              <div className={styles.links}>
                <a href={proj.github} target="_blank">GitHub</a>
                <a href={proj.live} target="_blank">Live</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}