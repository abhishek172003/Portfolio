import "./Projects.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarAlt,
  faCode,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { PROJECTS, ANIMATION_VARIANTS } from '../constants/constant';

const projectSecVar = ANIMATION_VARIANTS.stagger;
const h2variant = ANIMATION_VARIANTS;

function Projects() {
  return (
    <div className="projects">
      <motion.h2
        className="intro"
        initial="hidden"
        animate="visible"
        variants={h2variant}
      >
        Projects I have worked on.
      </motion.h2>
      <motion.section
        initial="hidden"
        animate="visible"
        variants={projectSecVar}
      >
        {PROJECTS.map((project, index) => (
          <motion.div key={index} className="project" variants={h2variant}>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{project.title}</h2>
            </a>
            <p>
              <FontAwesomeIcon icon={faCircleInfo} className="icon" />
              {project.description}
            </p>
            <p>
              <FontAwesomeIcon icon={faCode} className="icon" />
              {project.technologies.join(", ")}
            </p>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
              {project.year}
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} className="icon" />
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Git Repository
              </a>
            </p>
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
}

export default Projects;
