export default function About() {
  const skills = ["JavaScript", "React", "Next.js", "Node.js", "MongoDB", "HTML", "CSS", "C++", "C", "Python"];

  return (
    <section id="about">
      <div className="max-w-[80vw] m-auto text-center">
        <h2 className="text-5xl font-bold mb-6 text-accent">About Me</h2>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <img
            src="https://i.pinimg.com/736x/de/b6/bf/deb6bf49b31cc718890b49ce318afa9f.jpg"
            alt="profile"
            className="w-85 h-85 object-cover rounded-md"
          />
          <p className="text-text-secondary text-lg max-md:text-base">
            Hi, My name is Ayontika Pal, I’m a passionate Computer Science
            student focused on building impactful and user-friendly web
            applications.
            I enjoy working with modern technologies like React and
            exploring full-stack development. Currently, I’m strengthening my
            problem-solving skills and aiming to build projects that combine creativity with
            real-world functionality.
          </p>
          <div className="flex flex-col gap-5">
            <div className="font-bold text-2xl text-highlight max-md:text-xl">
              Technologies and Languages I am proficient in:
            </div>
            <div className="flex gap-2.5 flex-wrap justify-center">
              {skills.map((skill) => (
                <span key={skill} className="py-2 px-4 bg-skill-bg rounded-3xl mb-1 text-[0.9rem]">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
