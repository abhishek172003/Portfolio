import Pdf from '../Pdf';
import './Resume.css';
import React from "react";
import AbhishekPalve from '../assets/AbhishekPalve.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload} from '@fortawesome/free-solid-svg-icons';
import {motion} from "framer-motion";
import { RESUME_FILE, ANIMATION_VARIANTS, PERSONAL_INFO } from '../constants/constant';

const hvariant = {
  ...ANIMATION_VARIANTS,
  visible: { ...ANIMATION_VARIANTS.visible, delay: 0.5 }
}; 

function Resume() {
    return (
      <div className="Resume">
        <motion.div className='header' initial="hidden" animate="visible" variants={hvariant}>
          <h2>My Resume</h2>
          <a href={AbhishekPalve} download={RESUME_FILE.filename}>
            <button>
              Download
              <FontAwesomeIcon icon={faDownload} className='icon' />
            </button>
          </a>
        </motion.div>
        <div className='pdf-viewer'>
          <Pdf/>
        </div>
      </div>
    );
  }
  
  export default Resume;
