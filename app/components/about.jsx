import styles from "./about.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.content}>
          <img
            src="https://i.pinimg.com/736x/de/b6/bf/deb6bf49b31cc718890b49ce318afa9f.jpg"
            alt="profile"
            className={styles.profileImage}
          />
            <p className={styles.text}>
              Hi, My name is Ayontika Pal, I’m a passionate Computer Science student focused on building impactful and user-friendly web applications. 
              <br></br>I enjoy working with modern technologies like React and exploring full-stack development. Currently, I’m strengthening my problem-solving skills 
              <br></br>and aiming to build projects that combine creativity with real-world functionality. 
            </p>
          <div className={styles.skills}>
              <div className={styles.skillsTitle}>
                Technologies and Languages I am proficient in:
              </div>
              <div className={styles.skillsList}>
                <span className={styles.skill}>JavaScript</span>
                <span className={styles.skill}>React</span>
                <span className={styles.skill}>Next.js</span>
                <span className={styles.skill}>Node.js</span>
                <span className={styles.skill}>MongoDB</span>
                <span className={styles.skill}>HTML</span>
                <span className={styles.skill}>CSS</span>
                <span className={styles.skill}>C++</span>
                <span className={styles.skill}>C</span>
                <span className={styles.skill}>Python</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
