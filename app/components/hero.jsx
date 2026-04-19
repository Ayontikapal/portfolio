"use client";
import styles from "./hero.module.css";
import profileImage from "./assets/profile_image.jpeg";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              Hi, I'm <span id={styles.heroName}>Ayontika Pal</span>
            </h1>
            <p>CSE undergrad | Aspiring to be a Full Stack Developer</p>
            <p className={styles.heroContentText}>
              Passionate about creating impactful digital solutions <br></br>and
              continuously learning new technologies.
            </p>
            <div className={styles.heroButtons}>
              <button
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                View Projects
              </button>
              <button
                onClick={() => {
                  document.getElementById("contact").scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className={styles.heroImage}>
            <img src={profileImage.src} alt="profile" />
          </div>
        </div>
      </div>
    </section>
  );
}
