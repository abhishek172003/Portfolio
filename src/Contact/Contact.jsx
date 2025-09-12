import './Contact.css'
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CONTACT_INFO } from '../constants/constant';

function Contact() {
    // Debug: Log the contact info to console
    // console.log('CONTACT_INFO:', CONTACT_INFO);
    
    return (
      <div className="contact">
        <h2 className="intro-con">
          If you liked my portfolio, Let's Connect 🚀.
        </h2>
        
        {/* Debug: Show contact info as text */}
        <div style={{marginBottom: '2rem', textAlign: 'center', color: 'var(--text-secondary)'}}>
          <p>Debug Info:</p>
          <p>Email: {CONTACT_INFO.email}</p>
          <p>GitHub: {CONTACT_INFO.socialLinks.github}</p>
          <p>LinkedIn: {CONTACT_INFO.socialLinks.linkedin}</p>
          <p>Twitter: {CONTACT_INFO.socialLinks.twitter}</p>
        </div>
        
        <section className="contacts">
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            id='email-link' 
            className="contact-link"
          >
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <h3>Email</h3>
            <span className="tooltip">{CONTACT_INFO.email}</span>
          </a>
          
          <a 
            href={CONTACT_INFO.socialLinks.github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <h3>Github</h3>
          </a>
          
          <a 
            href={CONTACT_INFO.socialLinks.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <h3>LinkedIn</h3>
          </a>
          
          <a 
            href={CONTACT_INFO.socialLinks.twitter} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <h3>Twitter (X)</h3>
          </a>
        </section>
      </div>
    );
  }
  
  export default Contact;