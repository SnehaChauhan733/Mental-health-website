import React from 'react';
import './DisordersExercises.css';
import Footer from '../../components/Footer/Footer';

const DisordersExercises = () => {
  const exercises = [
    {
      title: "Deep Breathing",
      description: "Inhale slowly for 4 seconds, hold for 4, and exhale for 4. This simple technique can help calm your nervous system.",
      duration: "5-10 min",
      steps: [
        "Sit or lie in a comfortable position",
        "Place one hand on your chest, one on your belly",
        "Breathe in slowly through your nose for 4 counts",
        "Hold your breath for 4 counts",
        "Exhale slowly through your mouth for 4 counts",
        "Repeat for 5-10 minutes"
      ]
    },
    {
      title: "Progressive Muscle Relaxation",
      description: "Tense and relax muscle groups one by one. This helps release physical tension and promotes relaxation.",
      duration: "15-20 min",
      steps: [
        "Start with your toes and feet",
        "Tense the muscles for 5 seconds",
        "Release and feel the relaxation",
        "Move up to your calves and thighs",
        "Continue with your torso, arms, and face",
        "End with full body relaxation"
      ]
    },
    {
      title: "Yoga",
      description: "Enhances both physical and mental balance. Gentle yoga poses can help reduce stress and improve mood.",
      duration: "20-30 min",
      steps: [
        "Start with gentle warm-up stretches",
        "Practice child's pose for grounding",
        "Try cat-cow stretches for spine flexibility",
        "Hold warrior pose for strength",
        "End with corpse pose for relaxation",
        "Focus on your breath throughout"
      ]
    },
    {
      title: "Meditation",
      description: "Practice 5–10 minutes of mindfulness meditation daily. This helps improve focus and reduce anxiety.",
      duration: "5-15 min",
      steps: [
        "Find a quiet, comfortable space",
        "Sit with your back straight",
        "Close your eyes or focus on a point",
        "Focus on your breathing",
        "When thoughts arise, gently return to breath",
        "Start with 5 minutes, gradually increase"
      ]
    },
    {
      title: "Nature Walking",
      description: "20–30 minutes walk in nature can significantly uplift mood and reduce stress levels.",
      duration: "20-30 min",
      steps: [
        "Choose a safe outdoor location",
        "Walk at a comfortable, steady pace",
        "Notice the sights, sounds, and smells",
        "Take deep breaths of fresh air",
        "Focus on the present moment",
        "Return feeling refreshed and calm"
      ]
    },
    {
      title: "Journaling",
      description: "Write your thoughts to reduce stress and gain clarity. This helps process emotions and track progress.",
      duration: "10-15 min",
      steps: [
        "Get a notebook or use digital journal",
        "Write freely without judgment",
        "Express your current emotions",
        "Reflect on your day or week",
        "Set intentions for tomorrow",
        "End with gratitude or positive thoughts"
      ]
    }
  ];

  return (
    <div className="disorders-exercises-container">
      <div className="exercise-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🧘‍♀️ Exercises to Improve <span className="highlight">Mental Health</span></h1>
        <p>These exercises can help improve your mental well-being and manage symptoms of various mental health conditions. Each exercise includes step-by-step guidance.</p>
      </div>

      <div className="exercise-grid">
        {exercises.map((exercise, index) => (
          <div className="exercise-card" key={index}>
            <div className="exercise-image-container">
              <div className="exercise-icon">
                {index === 0 && "🫁"}
                {index === 1 && "💪"}
                {index === 2 && "🧘"}
                {index === 3 && "🧠"}
                {index === 4 && "🚶"}
                {index === 5 && "📝"}
              </div>
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

export default DisordersExercises;
