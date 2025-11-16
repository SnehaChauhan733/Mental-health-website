import React from "react";
import "./DepressionExercises.css";
import Footer from "../../components/Footer/Footer";

import breathingGif from "../../assets/breathing.gif";
import journalingGif from "../../assets/journaling.gif";
import natureGif from "../../assets/nature.gif";
import yogaGif from "../../assets/yoga.gif";

const DepressionExercises = () => {
  const exercises = [
    {
      title: "Mindful Breathing",
      description: "Sit calmly, close your eyes, and take slow, deep breaths for 5 minutes.",
      image: breathingGif,
      duration: "5-10 min",
      steps: [
        "Find a quiet, comfortable space",
        "Close your eyes and sit upright",
        "Breathe in slowly for 4 counts",
        "Hold your breath for 4 counts",
        "Exhale slowly for 6 counts",
        "Repeat for 5-10 minutes"
      ]
    },
    {
      title: "Journaling",
      description: "Write down your thoughts and feelings to better understand your emotions.",
      image: journalingGif,
      duration: "10-15 min",
      steps: [
        "Get a notebook or use a digital journal",
        "Write freely without judgment",
        "Express your current emotions",
        "Reflect on positive moments",
        "Set small goals for tomorrow",
        "End with gratitude"
      ]
    },
    {
      title: "Nature Walks",
      description: "Spend 15–20 minutes walking in a park or green area to relax your mind.",
      image: natureGif,
      duration: "15-30 min",
      steps: [
        "Choose a safe outdoor location",
        "Walk at a comfortable pace",
        "Notice the sights, sounds, and smells",
        "Take deep breaths of fresh air",
        "Focus on the present moment",
        "Return feeling refreshed"
      ]
    },
    {
      title: "Stretching or Yoga",
      description: "Practice simple stretches or yoga poses to reduce stress and increase energy.",
      image: yogaGif,
      duration: "10-20 min",
      steps: [
        "Start with gentle neck rolls",
        "Move to shoulder stretches",
        "Try cat-cow pose",
        "Practice child's pose",
        "End with deep breathing",
        "Feel your body relax"
      ]
    },
    {
      title: "Gratitude Practice",
      description: "Focus on positive aspects of your life to shift your mindset and improve mood.",
      image: breathingGif,
      duration: "5-10 min",
      steps: [
        "Sit comfortably and close your eyes",
        "Think of 3 things you're grateful for",
        "Write them down or say them aloud",
        "Feel the positive emotions",
        "Reflect on why you're grateful",
        "Carry this feeling with you"
      ]
    },
    {
      title: "Music Therapy",
      description: "Listen to calming or uplifting music to improve your emotional state.",
      image: journalingGif,
      duration: "10-15 min",
      steps: [
        "Choose calming or uplifting music",
        "Find a comfortable position",
        "Close your eyes and listen",
        "Focus on the melody and rhythm",
        "Let the music guide your emotions",
        "Feel the therapeutic effects"
      ]
    }
  ];

  return (
    <div className="depression-exercise-container">
      <div className="exercise-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🧘‍♀️ Exercises for Coping with <span className="highlight">Depression</span></h1>
        <p>Try these simple activities daily to manage your mood and improve well-being. Each exercise includes step-by-step guidance to help you get started.</p>
      </div>
      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <div className="exercise-card" key={index}>
            <div className="exercise-image-container">
              <img src={exercise.image} alt={exercise.title} />
              <div className="exercise-overlay">
                <span className="exercise-duration">{exercise.duration}</span>
              </div>
            </div>
            <div className="exercise-content">
              <h3>{exercise.title}</h3>
              <p>{exercise.description}</p>
              <div className="exercise-steps">
                {exercise.steps.map((step, stepIndex) => (
                  <span key={stepIndex} className="step">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default DepressionExercises;
