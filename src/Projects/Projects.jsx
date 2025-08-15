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

const projectSecVar = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delay: 0.2,
    },
  },
};

const h2variant = {
  hidden: { opacity: 0, y: 75 },
  visible: { opacity: 1, y: 0, ease: "easeOut" },
};

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
        <motion.div className="project" variants={h2variant}>
          <a
            href="https://huggingface.co/spaces/abhishekpalve55/skinCancerDetection"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Skin Cancer Detection For Early Intervention Using Deep Learning.
            </h2>
          </a>
          <p>
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            - Built a skin lesion classification system using Python and
            Xception CNN trained on the HAM10000 dataset to identify 7 lesion
            types with 89% accuracy. <br />- Designed a user-friendly interface
            enabling image upload, segmentation, prediction, and downloadable
            PDF reports for clinical support and patient prioritization.
          </p>
          <p>
            <FontAwesomeIcon icon={faCode} className="icon" />
            Python, SQL, Machine Learning, Deep Learning, NLP, Statistics
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a
              href="https://github.com/abhishek172003/Skin-Cancer-Detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Git Repository
            </a>
          </p>
        </motion.div>
        <motion.div className="project" variants={h2variant}>
          <a
            href="https://huggingface.co/spaces/abhishekpalve55/Movie-recommendation-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Content-Based Movie Recommender System using Cosine Similarity
            </h2>
          </a>
          <p>
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            - Built a personalized movie recommender system using content-based
            filtering and cosine similarity. <br /> 
            - Analyzed movie metadata like
            genres, cast, and directors to recommend similar movies based on
            user input.
          </p>
          <p>
            <FontAwesomeIcon icon={faCode} className="icon" />
            Cosine Similarity
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2025
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a
              href="https://github.com/abhishek172003/Movie-Recommendation-System"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Git Repository
            </a>
          </p>
        </motion.div>

        {/* <motion.div className="project" variants={h2variant}>
          <a href="/" target="_blank">
            <h2>Mental Health Compass</h2>
          </a>
          <p>
            <FontAwesomeIcon icon={faCircleInfo} className="icon" />
            Features assessment tool and mental health resources.
          </p>
          <p>
            <FontAwesomeIcon icon={faCode} className="icon" />
            MERN stack, Google Places API
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
            2023
          </p>
          <p>
            <FontAwesomeIcon icon={faGithub} className="icon" />
            <a
              href="https://github.com/KhushiMhasange/MentalHealthCompass"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Git Repository
            </a>
          </p>
        </motion.div> */}
      </motion.section>
    </div>
  );
}

export default Projects;

// const containerRef = useRef(null);
//   const inView = useInView(containerRef,{once:true});
//   const mainControls = useAnimation()

//   const {scrollYProgress} = useScroll({
//     target:containerRef,
//     offset:["start end","end end"]
//   })

// const textVal = useTransform(
//     scrollYProgress,
//     [0,1],
//     [-"100%","0%"]
// )

// useEffect(()=>{
//   if(inView){
//     mainControls.start("visible")
//   }
// },[inView, mainControls])
