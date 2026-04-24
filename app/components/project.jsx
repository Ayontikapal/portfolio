import getProjects from "./data/projects.js";

export default function Projects() {
  const projects=getProjects();

  return (
    <section id="projects">
      <div className="max-w-275 m-auto px-5">
        <h2 className="text-center text-5xl mb-8 font-bold text-accent">Projects</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6.5">
          {projects.map((proj) => (
            <div key={proj.id} className="flex flex-col justify-between p-5 bg-skill-bg rounded-xl transition-all duration-200 ease-in-out hover:-translate-y-1.25 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
              <div className="flex items-center justify-between mb-2.5">
              <h3 className="text-xl font-semibold">{proj.title}</h3>
              <div className="text-center w-9.5 h-9.5 text-[1.4rem] text-text bg-icon rounded-[5px]">
                 <i className="fa-solid fa-arrow-up-right-dots"></i>
              </div>
              </div>
              <p className="text-text-secondary mb-3.5">{proj.desc}</p>

              <div className="text-sm mb-3.75 flex flex-wrap">
                {proj.tech.map((t) => (
                  <span key={t} className="my-1.25 mr-2.5 bg-accent text-white p-1.5 rounded-md font-bold">{t}</span>
                ))}
              </div>

              <div className="flex gap-3">
                <a className="link" href={proj.github} target="_blank">GitHub</a>
                <a className="link" href={proj.live} target="_blank">Live</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}