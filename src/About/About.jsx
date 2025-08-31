import "./About.css";
import tulip from "../assets/tulip.png";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJs,
  faGitAlt,
  faGithub,
  faReact,
  faNode,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faLaptopCode, 
  faBrain, 
  faEye, 
  faChartLine,
  faCode,
  faTools
} from "@fortawesome/free-solid-svg-icons";
import { HERO_CONTENT, ABOUT_CONTENT, SKILLS, ANIMATION_VARIANTS } from '../constants/constant';

// Icon mapping for skills
const iconMap = {
  faPython,
  faJs,
  faGitAlt,
  faGithub,
  faReact,
  faNode,
  faBootstrap,
  faDatabase,
  faLaptopCode,
  faBrain,
  faEye,
  faChartLine,
  faCode,
  faTools
};

// Flatten skills array for easier rendering
const allSkills = [
  ...SKILLS.programmingLanguages,
  ...SKILLS.dataScience,
  ...SKILLS.machineLearning,
  ...SKILLS.deepLearning,
  ...SKILLS.computerVision,
  ...SKILLS.webDevelopment,
  ...SKILLS.tools
].map(skill => ({
  ...skill,
  icon: iconMap[skill.icon] || faCode // fallback to faCode if icon not found
}));

const h2variant = ANIMATION_VARIANTS;
const pvariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, ease: "easeOut" }
};

const imgvariant = {
  hidden: { opacity: 0, x: 100 },
  show: { opacity: 1, x: 0, ease: "easeOut" }
};

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2 initial="hidden" animate="visible" variants={h2variant}>{HERO_CONTENT.title}</motion.h2>
          <motion.p className="intro-para" variants={pvariant} initial="hidden" animate="show">
            {HERO_CONTENT.subtitle}
            🎮💻🚀🔥
          </motion.p>
        </div>
        <motion.div variants={imgvariant} initial="hidden" animate="show">
          <img src={tulip} alt="pixel-tulip" />
        </motion.div>
      </div>
      <div>
        <motion.div
          className="skills-marquee"
          animate={{ x: ["5%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType:"loop",duration: 8, ease: "linear" }}
        >
          <div className="skills-wrapper">
            {allSkills.concat(allSkills).map((skill, index) => (
              <span key={index} className="skill-item">
                <FontAwesomeIcon icon={skill.icon} className="skill-icon" />{" "}
                {skill.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
