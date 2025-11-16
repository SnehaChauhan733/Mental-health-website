import React, { useState } from "react";
import "./Anxiety.css";

const Anxiety = () => {
  const [activeSection, setActiveSection] = useState("documentation");

  return (
    <div className="anxiety-container">
      <h1>🧠 Anxiety Support</h1>

      {/* Clickable Options */}
      <div className="anxiety-options">
        <button onClick={() => setActiveSection("documentation")}>📖 Documentation</button>
        <button onClick={() => setActiveSection("precautions")}>✅ Precautions</button>
        <button onClick={() => setActiveSection("exercises")}>🧘‍♀️ Exercises</button>
        <button onClick={() => setActiveSection("consultant")}>👩‍⚕️ Consultant</button>
      </div>

      {/* Sections - Shown based on state */}
      {activeSection === "documentation" && (
        <section className="anxiety-section">
          <h2>What is Anxiety?</h2>
          <p>
            Anxiety is a mental health condition involving excessive worry, fear, or nervousness.
            It can affect daily activities and may include physical symptoms such as a racing heart,
            sweating, or restlessness.
          </p>
        </section>
      )}

      {activeSection === "precautions" && (
        <section className="anxiety-section">
          <h2>Precautions for Anxiety</h2>
          <ul>
            <li>Practice mindfulness and breathing exercises.</li>
            <li>Maintain a healthy sleep schedule.</li>
            <li>Avoid caffeine, alcohol, and screen overuse.</li>
            <li>Seek support from friends, family, or professionals.</li>
          </ul>
        </section>
      )}

      {activeSection === "exercises" && (
        <section className="anxiety-section">
          <h2>Exercises for Anxiety</h2>
          <div className="exercise-gallery">
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/O-6f5wQXSu8"
              title="Guided Meditation"
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <iframe
              width="300"
              height="200"
              src="https://www.youtube.com/embed/ZToicYcHIOU"
              title="Deep Breathing"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      )}

      {activeSection === "consultant" && (
        <section className="anxiety-section">
          <h2>Book a Consultant</h2>
          <div className="doctor-cards">
            <div className="doctor-card">
              <h3>Dr. Anjali Verma</h3>
              <p>Psychologist • 5 years experience</p>
              <button>Book Appointment</button>
            </div>
            <div className="doctor-card">
              <h3>Dr. Rohan Mehta</h3>
              <p>Mental Health Expert • 8 years experience</p>
              <button>Book Appointment</button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Anxiety;
