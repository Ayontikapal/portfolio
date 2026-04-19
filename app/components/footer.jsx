import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.top}>
          <h3 className={styles.name}>Ayontika's Portfolio</h3>
          <p className={styles.tagline}>
            Exploring the world of web development
          </p>
        </div>

        <div className={styles.iconsContainer}>
          <a
            href="https://www.linkedin.com/in/ayontikapal/"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/157006/linkedin.svg"
              alt="LinkedIn"
              className={styles.icon}
            />
          </a>

          <a
            href="https://github.com/Ayontikapal"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/449764/github.svg"
              alt="GitHub"
              className={styles.icon}
            />
          </a>

          <a
            href="mailto:ayontikapal@gmail.com"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/452213/gmail.svg"
              alt="Email"
              className={styles.icon}
            />
          </a>
        </div>

        <p className={styles.copy}>
          © {new Date().getFullYear()} Ayontika. All rights reserved.
        </p>

      </div>
    </footer>
  );
}