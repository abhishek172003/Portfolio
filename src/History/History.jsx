import './History.css'
import React from "react";
import {motion} from "framer-motion";
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, ANIMATION_VARIANTS } from '../constants/constant';

const historySecVar = ANIMATION_VARIANTS.stagger;
const h2variant = ANIMATION_VARIANTS;
const pvariant = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0, ease: "easeOut" }
}; 

function History(){
    
    return(
        <div className="about">
            <motion.h2 className='intro' initial="hidden" animate="visible" variants={h2variant}>A breif about my life in college.</motion.h2>
            <motion.section variants={historySecVar} initial="hidden" animate="show" className="history">
                {/* Education */}
                {EDUCATION.map((edu, index) => (
                  <motion.p key={`edu-${index}`} variants={pvariant}>
                    {edu.degree}
                    <p className='title'>{edu.institution}</p>
                    <span className='dates'>{edu.duration}</span>
                  </motion.p>
                ))}
                {/* Certifications */}
                {CERTIFICATIONS.map((cert, index) => (
                  <motion.p key={`cert-${index}`} variants={pvariant}>
                    {cert.name}
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <p className='title'>Certificate</p>
                    </a>
                    <span className='dates'>{cert.duration}</span>
                  </motion.p>
                ))} 
                {/* Achievements */}
                {ACHIEVEMENTS.map((achievement, index) => (
                  <motion.p key={`achievement-${index}`} variants={pvariant}>
                    {achievement.title}
                    <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                      <p className='title'>{achievement.platform}</p>
                    </a>
                    <span className='dates'>{achievement.duration}</span>
                  </motion.p>
                ))}
                
                {/* Additional Learning */}
                <motion.p variants={pvariant}>
                  OOP's in C++ and basic DSA
                  <p className='title'>Self-Learning</p>
                  <span className='dates'>2022-2023</span>
                </motion.p>
                <motion.p variants={pvariant}>
                  Fundamentals of Programming in C++
                  <p className='title'>Self-Learning</p>
                  <span className='dates'>2021-2022</span>
                </motion.p>
            </motion.section>
        </div>
    );
}

export default History;