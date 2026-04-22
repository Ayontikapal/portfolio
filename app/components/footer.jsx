export default function Footer() {
  return (
    <footer className="border-t border-solid border-border mt-18">
      <div className="max-w-275 m-auto px-5 text-center mb-5 ">
        <div className="mt-7">
          <h3 className="text-2xl font-bold text-highlight max-md:text-xl">Ayontika's Portfolio</h3>
          <p className="text-sm text-text-secondary max-md:text-xs">
            Exploring the world of web development
          </p>
        </div>

        <div className="flex justify-center gap-5 my-5">
          <a
            href="https://www.linkedin.com/in/ayontikapal/"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/157006/linkedin.svg"
              alt="LinkedIn"
              className="h-5.5 w-5.5 transition transform opacity duration-200 ease hover:scale-[1.2] hover:opacity-80"
            />
          </a>

          <a
            href="https://github.com/Ayontikapal"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/449764/github.svg"
              alt="GitHub"
              className="h-5.5 w-5.5 transition transform opacity duration-200 ease hover:scale-[1.2] hover:opacity-80"
            />
          </a>

          <a
            href="mailto:ayontikapal@gmail.com"
            target="_blank"
          >
            <img
              src="https://www.svgrepo.com/show/452213/gmail.svg"
              alt="Email"
              className="h-5.5 w-5.5 transition transform opacity duration-200 ease hover:scale-[1.2] hover:opacity-80"
            />
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          © {new Date().getFullYear()} Ayontika. All rights reserved.
        </p>

      </div>
    </footer>
  );
}