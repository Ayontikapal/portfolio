"use client";
import profileImage from "./assets/profile_image.jpeg";

export default function Hero(){
  return (
    <section id="home" className="w-[98vw] flex items-center justify-center min-h-[calc(100vh-70px)]">
        <div className="text-center flex items-center gap-24 max-lg:flex-col-reverse max-lg:gap-10">
          <div className="flex flex-col flex-1 p-8 gap-6">
            <h1 className="text-6xl font-bold max-lg:text-5xl">
              Hi, I'm <span className="text-accent">Ayontika Pal</span>
            </h1>
            <p className="text-3xl text-text max-lg:text-2xl">CSE undergrad | Aspiring to be a Full Stack Developer</p>
            <p className="text-xl max-lg:text-lg">
              Passionate about creating impactful digital solutions <br></br>and
              continuously learning new technologies.
            </p>
            <div className="flex justify-center flex-wrap gap-5 mt-4">
              <button className="py-3 px-6 text-xl ring ring-accent rounded-3xl cursor-pointer bg-bg text-text hover:bg-accent hover:text-white"
                onClick={() => {
                  document.getElementById("projects").scrollIntoView({
                    behavior: "smooth",
                  }); 
                }}
              >
                View Projects
              </button> 
              <button className="py-3 px-6 text-xl ring ring-accent rounded-3xl cursor-pointer bg-bg text-text hover:bg-accent hover:text-white"
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

          <div className="w-102 h-102 inline-block p-[4px_4px_0px] rounded-full bg-linear-270 from-text via-highlight to-accent bg-size-[400%_400%] animate-gradientRotate max-lg:w-82 max-lg:h-82 max-lg:mt-12">
            <img src={profileImage.src} alt="profile" className="w-100 h-100 rounded-full object-cover max-lg:w-80 max-lg:h-80" />
          </div>
        </div>
    </section>
  );
}
