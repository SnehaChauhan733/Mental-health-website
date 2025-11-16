import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";
import doctorImage from "../../assets/Docter.jpeg";

const Hero = () => {
  const navigate = useNavigate();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const issues = [
    { name: "Anxiety", path: "anxiety" },
    { name: "Depression", path: "depression" },
    { name: "Addictive Behavior", path: "addiction" },
    { name: "Disorders", path: "disorders" },
  ];

  const handleClick = (issueName) => {
    setActiveDropdown(activeDropdown === issueName ? null : issueName);
  };

  const handleOptionClick = (path, section) => {
    navigate(`/${path}/${section}`);
    setActiveDropdown(null);
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Your Mental Well-being Matters</h1>
        <p>
          HealSpace offers support for anxiety, depression, stress, and more.
          Let’s take your first step toward a healthier mind.
        </p>

        <div className="hero-tags">
          {issues.map((issue) => (
            <div key={issue.name} className="dropdown">
              <span
                className="dropdown-trigger"
                onClick={() => handleClick(issue.name)}
              >
                {issue.name}
                <span className="dropdown-icon">▼</span>
              </span>

              {activeDropdown === issue.name && (
                <div className="dropdown-menu">
                  <div onClick={() => handleOptionClick(issue.path, "documentation")}>
                    📖 Read Documentation
                  </div>
                  <div onClick={() => handleOptionClick(issue.path, "precautions")}>
                    ⚠️ Precautions
                  </div>
                  <div onClick={() => handleOptionClick(issue.path, "exercises")}>
                    🧘 Exercises
                  </div>
                  <div onClick={() => handleOptionClick(issue.path, "consultant")}>
                    👨‍⚕️ Consultant
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="hero-image">
        <img src={doctorImage} alt="Mental Health Support" />
      </div>
    </section>
  );
};

export default Hero;
