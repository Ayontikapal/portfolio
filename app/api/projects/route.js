export async function GET() {

const projects = [
  {
    id: 1,
    title: "Wanderlust",
    desc: "Full stack travel booking platform with user authentication and reviews.",
    tech: ["Node.js", "MongoDB", "Express", "JavaScript", "CSS", "EJS"],
    github: "https://github.com/Ayontikapal/wanderlust",
    live: "https://wanderlust-project-4yt9.onrender.com/listings",
  },
  {
    id: 2,
    title: "Pomodoro Timer",
    desc: "Simple JavaScript timer app to boost productivity using the Pomodoro technique.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayontikapal/pomodoro-web",
    live: "https://rawcdn.githack.com/Ayontikapal/pomodoro-web/9e8cd88b4097e29e5d2cb066e094b88ead41aa05/pomodoro.html",
  },
  //color pallete generator
    {
    id: 3,
    title: "Color Palette Generator",
    desc: "Web app that generates random color palettes for designers and developers.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayontikapal/color-palette-generator",
    live: "https://rawcdn.githack.com/Ayontikapal/color-palette-generator/2efae94a27b541e030178354641dbd9fb7d62d66/colorPalette.html",
  },
  //amaxon ui clone
    {
    id: 4,
    title: "Amazon UI Clone",
    desc: "A clone of Amazon's homepage built with Css elements.",
    tech: ["Html", "CSS"],
    github: "https://github.com/Ayontikapal/amazon-ui-clone",
    live: "https://rawcdn.githack.com/Ayontikapal/amazon-ui-clone/3ea18230118d84c4c46bfa3d49823f8f57706488/amazon.html",
  },
  {
    id: 5,
    title: "Password Generator",
    desc: "A web app that generates secure passwords based on user-selected criteria.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayontikapal/password-generator",
    live: "https://ayontikapal.github.io/password-generator/",
  },
  {
    id: 6,
    title: "Simple Calculator",
    desc: "A simple calculator app built with JavaScript, HTML, and CSS.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Ayontikapal/calculator-website",
    live: "https://rawcdn.githack.com/Ayontikapal/calculator-website/5d2735eb3b573d5d8e278a20e23a25178b015b54/calculator.html",
  }
];

return Response.json(projects);
}
