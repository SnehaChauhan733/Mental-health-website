import React from "react";
import "./About.css";
import calmImg from '../../assets/calm.png';
import supportImg from '../../assets/support.png';
import privacyImg from '../../assets/privacy.png';


const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2>About HealSpace</h2>
        <p>
          At <strong>HealSpace</strong>, we believe that mental wellness is just as important as physical health.
          Our platform provides a safe, private, and supportive environment for individuals dealing with
          anxiety, depression, stress, and more.
        </p>
        <p>
          Whether you are looking for guided exercises, professional consultations, or self-help resources —
          HealSpace is your companion on the journey toward healing and emotional balance.
        </p>

        <div className="about-highlights">
          <div className="highlight-card">
            <img src={calmImg} alt="Mindfulness" />
            <h4>Mindfulness Practices</h4>
            <p>Explore guided meditations and breathing exercises to calm your mind.</p>
          </div>
          <div className="highlight-card">
            <img src={supportImg} alt="Support" />
            <h4>24/7 Support</h4>
            <p>Get support whenever you need it from verified mental health professionals.</p>
          </div>
          <div className="highlight-card">
            <img src={privacyImg} alt="Privacy" />
            <h4>Private & Secure</h4>
            <p>Your identity is protected. We ensure 100% confidentiality and trust.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
