import { useTranslation, Trans } from "react-i18next";
import { Github, ExternalLink } from "lucide-react";

import clickShopImg from "../assets/Projects/clickshop.png";
import portfolioImg from "../assets/Projects/portfolio.png";
import movieAppImg from "../assets/Projects/movie.png";
import laravelProjectImg from "../assets/Projects/food-api.png";
import devisHubImg from "../assets/Projects/devis-hub.png";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Click Shop Maroc",
      descKey: "project_clickshop_desc",
      img: clickShopImg,
      tags: ["React", "Google Sheets API", "Facebook Pixel"],
      github: "",
      demo: "https://click-shop.ma",
    },
    {
      title: "My Portfolio",
      descKey: "project_portfolio_desc",
      img: portfolioImg,
      tags: ["React.js", "Vite", "i18next", "Tailwind", "Framer Motion"],
      github: "https://github.com/lilyaaas/portfolio",
      demo: "https://ilyaslhouari.netlify.app/",
    },
    {
      title: "IlyFlicks",
      descKey: "project_movie_desc",
      img: movieAppImg,
      tags: [
        "React.js",
        "Reduxjs/Toolkit",
        "TMDB API",
        "Axios",
        "Tailwind CSS",
      ],
      github: "https://github.com/lilyaaas/movie-app",
      demo: "https://ilyflicks.netlify.app/",
    },
    {
      title: "QuickFood: Full-Stack Delivery Platform",
      descKey: "project_quickfood_desc",
      img: laravelProjectImg,
      tags: [
        "PHP",
        "Laravel",
        "MySQL",
        "Redux Toolkit",
        "Axios",
        "GitHub Actions",
        "Tailwind CSS",
        "Postman",
        "Sanctum",
      ],
      github: "https://github.com/lilyaaas/FullStack-Food-Delivery-app",
      demo: "",
    },
    {
      title: "DevisHub",
      descKey: "project_devishub_desc",
      img: devisHubImg,
      tags: [
        "React",
        "Laravel",
        "MySQL",
        "Tailwind CSS",
        "Laravel Sanctum",
        "Axios",
      ],
      github: "",
      demo: "https://devishub.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full py-24 md:py-28 px-5 lg:px-24 2xl:px-44"
    >
      {/* Background glow accents */}
      <div className="absolute right-0 top-20 w-100 h-100 bg-secondary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 bottom-20 w-75 h-75 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full mx-auto text-center relative z-10">
        <h2 className="font-poppins text-[2rem] lg:text-[2.8rem] font-bold mb-12 lg:mb-20 text-center text-white tracking-wide">
          <Trans
            i18nKey="projects_title"
            components={{ span: <span className="text-gradient" /> }}
          />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col h-full bg-white/3 border border-white/6 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:border-primary/20 backdrop-blur-sm"
            >
              {/* Image Area */}
              <div className="relative overflow-hidden h-50 lg:h-65">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-103 group-hover:brightness-75"
                />

                {/* Floating action buttons */}
                <div className="absolute inset-0 hidden md:flex justify-center items-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md text-white rounded-full font-josefin font-semibold text-sm border border-white/10 transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:border-primary/40"
                    >
                      <Github size={16} /> {t("project_btn_code")}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-rose-indigo text-white rounded-full font-josefin font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(208,131,160,0.3)]"
                    >
                      <ExternalLink size={16} /> {t("project_btn_demo")}
                    </a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 text-left flex flex-col grow">
                <h3 className="font-josefin text-lg font-bold mb-2 text-white tracking-wide">
                  {project.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed mb-5 grow font-poppins">
                  {t(project.descKey)}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-poppins uppercase tracking-wider bg-white/4 text-primary/90 px-3 py-1.5 rounded-full border border-white/6"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Mobile buttons */}
                <div className="flex md:hidden gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 p-2.5 rounded-xl text-center font-josefin font-semibold text-sm bg-white/5 border border-white/10 text-white"
                    >
                      <Github size={16} /> {t("project_btn_code")}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 p-2.5 rounded-xl text-center font-josefin font-semibold text-sm bg-gradient-rose-indigo text-white"
                    >
                      <ExternalLink size={16} /> {t("project_btn_demo")}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
