import React from "react";
import "./DepressionDocumentation.css";
import Footer from "../../components/Footer/Footer";

const DepressionDocumentation = () => {
  return (
    <div className="depression-doc-container">
      <div className="doc-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🧠 Understanding <span className="highlight">Depression</span></h1>
        <p>
          Depression is a common but serious mood disorder. It causes severe symptoms that affect how
          you feel, think, and handle daily activities such as sleeping, eating, or working.
        </p>
      </div>

      <div className="doc-section">
        <h2>📌 Symptoms of Depression</h2>
        <ul>
          <li>😔 Persistent sad, anxious, or "empty" mood</li>
          <li>😞 Feelings of hopelessness or pessimism</li>
          <li>😠 Irritability and mood swings</li>
          <li>🎯 Loss of interest or pleasure in hobbies and activities</li>
          <li>😴 Fatigue or decreased energy</li>
          <li>🧠 Difficulty concentrating, remembering, or making decisions</li>
          <li>💭 Thoughts of death or suicide</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>🧬 Causes of Depression</h2>
        <ul>
          <li>🧪 Biological differences and brain chemistry</li>
          <li>⚖️ Hormonal changes (e.g., postpartum depression)</li>
          <li>🧬 Inherited traits (genetics)</li>
          <li>💔 Trauma and abuse</li>
          <li>😰 Long-term stress or illness</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>🩺 When to See a Doctor</h2>
        <p>
          If you feel depressed, make an appointment to see your doctor or mental health professional.
          Early intervention can help manage symptoms effectively. Remember, seeking help is a sign of strength, not weakness.
        </p>
      </div>

      <div className="doc-section">
        <h2>🤝 You Are Not Alone</h2>
        <p>
          Depression affects millions of people worldwide. With proper treatment and support, most people with depression can get better and lead fulfilling lives. 
          <strong>Reach out for help - you deserve support and healing.</strong>
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DepressionDocumentation;
