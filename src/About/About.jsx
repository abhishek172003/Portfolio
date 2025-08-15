import "./About.css";
import tulip from "../assets/tulip.png";
import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  // faJs,
  faGitAlt,
  faGithub,
  // faJupyter,
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

const skills = [
  // Programming Languages
  { name: "Python", icon: faPython },
  { name: "SQL", icon: faDatabase },
  
  // Data Analysis
  { name: "Pandas", icon: faChartLine },
  { name: "NumPy", icon: faCode },
  { name: "Matplotlib", icon: faChartLine },
  { name: "Seaborn", icon: faChartLine },
  { name: "Plotly", icon: faChartLine },
  
  // Machine Learning
  { name: "Scikit-learn", icon: faBrain },
  { name: "Feature Engineering", icon: faTools },
  { name: "Model Evaluation", icon: faBrain },
  { name: "Hyperparameter Tuning", icon: faTools },
  
  // Deep Learning
  { name: "TensorFlow", icon: faBrain },
  { name: "Keras", icon: faBrain },
  { name: "PyTorch", icon: faBrain },
  { name: "Neural Networks", icon: faBrain },
  { name: "CNNs", icon: faBrain },
  { name: "Transfer Learning", icon: faBrain },
  
  // Computer Vision
  { name: "OpenCV", icon: faEye },
  { name: "Image Preprocessing", icon: faEye },
  { name: "Data Augmentation", icon: faEye },
  
  // Tools
  { name: "Git", icon: faGitAlt },
  { name: "GitHub", icon: faGithub },
  // { name: "Jupyter Notebook", icon: faJupyter },
  { name: "Google Colab", icon: faLaptopCode },
  { name: "VS Code", icon: faLaptopCode },
];

const h2variant ={
  hidden:{opacity:0,
          y:75
  },
  visible:{opacity:1,
      y:0,
      ease:"easeOut",
  }
} 

const pvariant ={
  hidden:{opacity:0,
          x:-100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

const imgvariant ={
  hidden:{opacity:0,
          x:100
  },
  show:{opacity:1,
      x:0,
      ease:"easeOut",
  }
}

function About() {
  return (
    <div>
      <div className="About">
        <div>
          <motion.h2  initial="hidden" animate="visible" variants={h2variant}>Hey there! 🧑‍💻😎</motion.h2>
          <motion.p className="intro-para" variants={pvariant} initial="hidden" animate="show">
          B.E. Computer Science graduate with a strong foundation in data science and programming, seeking an
entry-level Data Scientist role to drive data-driven solutions.
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
            {skills.concat(skills).map((skill, index) => (
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
