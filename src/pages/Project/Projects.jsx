import React from "react";
import { useTranslation, Trans} from "react-i18next";
import { Github, ExternalLink } from "lucide-react";
import "./Projects.css";

import clickShopImg from "../../assets/Projects/clickshop.png";
import portfolioImg from "../../assets/Projects/portfolio.png";
import movieAppImg from "../../assets/Projects/movie.png";
import laravelProjectImg from "../../assets/Projects/food-api.png";

function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: "Click Shop Maroc",
      descKey: "project_clickshop_desc",
      img: clickShopImg,
      tags: ["React", "Vite", "Google Sheets API", "Facebook Pixel"],
      github: "",
      demo: "https://click-shop.ma",
    },
    {
      title: "My Portfolio",
      descKey: "project_portfolio_desc",
      img: portfolioImg,
      tags: ["React.js", "Vite", "i18next", "CSS3", "Framer Motion"],
      github: "https://github.com/IlyassLho/portfolio",
      demo: "https://ilyaslhouari.netlify.app/",
    },
    {
      title: "Ily Flicks",
      descKey: "project_movie_desc",
      img: movieAppImg,
      tags: ["React.js", "Reduxjs/Toolkit", "TMDB API", "Axios", "Tailwind CSS"],
      github: "https://github.com/IlyassLho/movie-app",
      demo: "https://ilyflicks.netlify.app/",
    },
    {
      title: "Food Delivery API",
      descKey: "project_laravel_desc",
      img: laravelProjectImg,
      tags: ["PHP", "Laravel", "MySQL", "Postman", "Sanctum"],
      github: "https://github.com/IlyassLho/food-delivery-api",
      demo: "",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">

        <h2 className="section-title">
          <Trans 
             i18nKey="projects_title" 
             components={{ span: <span className="text-primary" /> }} 
          />
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">

              {/* Image Area */}
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-overlay">
                    <Github size={20} /> {t('project_btn_code')}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-overlay">
                      <ExternalLink size={20} /> {t('project_btn_demo')}
                    </a>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{t(project.descKey)}</p>

                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* (Mobile mostly) */}
                <div className="project-buttons">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-github">
                    <Github size={18} /> {t('project_btn_code')}
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="btn-demo">
                      <ExternalLink size={18} /> {t('project_btn_demo')}
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