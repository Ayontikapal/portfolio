import styles from "./about.module.css";

export default function About() {
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "HTML", "CSS", "C++", "C", "Python"];

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
            Hi, My name is Ayontika Pal, I’m a passionate Computer Science
            student focused on building impactful and user-friendly web
            applications.
            <br></br>I enjoy working with modern technologies like React and
            exploring full-stack development. Currently, I’m strengthening my
            problem-solving skills
            <br></br>and aiming to build projects that combine creativity with
            real-world functionality.
          </p>
          <div className={styles.skills}>
            <div className={styles.skillsTitle}>
              Technologies and Languages I am proficient in:
            </div>
            <div className={styles.skillsList}>
              {skills.map((skill) => (
                <span key={skill} className={styles.skill}>{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
