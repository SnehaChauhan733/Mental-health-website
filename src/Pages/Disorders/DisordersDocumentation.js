import React from "react";
import "./DisordersDocumentation.css";
import Footer from "../../components/Footer/Footer";

const DisordersDocumentation = () => {
  return (
    <div className="disorder-doc-container">
      <div className="doc-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🧠 Understanding Mental Health <span className="highlight">Disorders</span></h1>
        <p>
          Mental health disorders refer to a wide range of conditions that affect mood, thinking, and behavior. 
          These disorders can be short-term or long-lasting and may impact daily functioning.
        </p>
      </div>

      <div className="doc-section">
        <h2>📋 Common Disorders</h2>
        <ul>
          <li>😰 Generalized Anxiety Disorder (GAD)</li>
          <li>😔 Major Depressive Disorder</li>
          <li>🔄 Obsessive-Compulsive Disorder (OCD)</li>
          <li>💔 Post-Traumatic Stress Disorder (PTSD)</li>
          <li>⚡ Bipolar Disorder</li>
          <li>🧠 Schizophrenia</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>🔍 Common Symptoms</h2>
        <p>Some common signs include:</p>
        <ul>
          <li>😞 Persistent sadness or low mood</li>
          <li>😰 Excessive fear or worry</li>
          <li>⚡ Extreme mood changes</li>
          <li>🚪 Withdrawal from friends and activities</li>
          <li>🧠 Difficulty concentrating or sleeping</li>
        </ul>
      </div>

      <div className="doc-section">
        <h2>🎯 Importance of Awareness</h2>
        <p>
          Raising awareness and educating ourselves about these disorders helps reduce stigma and promotes early treatment, leading to better outcomes. 
          <strong>Knowledge is the first step towards understanding and compassion.</strong>
        </p>
      </div>

      <div className="doc-section">
        <h2>🤝 Seeking Help</h2>
        <p>
          If you or someone you know is experiencing symptoms of a mental health disorder, it's important to seek professional help. 
          Early intervention and proper treatment can significantly improve quality of life and recovery outcomes.
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default DisordersDocumentation;
