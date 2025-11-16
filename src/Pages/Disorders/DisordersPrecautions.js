import React from 'react';
import './DisordersPrecautions.css';
import Footer from '../../components/Footer/Footer';

const DisordersPrecautions = () => {
  return (
    <div className="disorders-precautions-container">
      <div className="precautions-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🛡️ Precautions for Mental <span className="highlight">Disorders</span></h1>
        <p>
          Taking proactive steps to maintain mental health and prevent the worsening of mental disorders
          is crucial for overall well-being. Here's a comprehensive guide to help you protect your mental health:
        </p>
      </div>

      <div className="precaution-section">
        <h2>🛌 Maintain a Regular Sleep Schedule</h2>
        <p>
          Quality sleep is fundamental to mental health. Poor sleep can worsen symptoms of mental disorders
          and make it harder to manage daily challenges.
        </p>
        <ul>
          <li>Go to bed and wake up at the same time every day</li>
          <li>Aim for 7-9 hours of sleep per night</li>
          <li>Create a relaxing bedtime routine</li>
          <li>Keep your bedroom cool, dark, and quiet</li>
          <li>Avoid screens 1 hour before bedtime</li>
          <li>Limit caffeine intake, especially in the afternoon</li>
          <li>If you have trouble sleeping, consult a healthcare provider</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🥗 Follow a Balanced and Nutritious Diet</h2>
        <p>
          Nutrition plays a vital role in brain health and can significantly impact mental well-being.
          A healthy diet supports neurotransmitter function and overall mental health.
        </p>
        <ul>
          <li>Eat regular meals to maintain stable blood sugar</li>
          <li>Include omega-3 fatty acids (fish, nuts, seeds)</li>
          <li>Consume plenty of fruits and vegetables</li>
          <li>Limit processed foods and added sugars</li>
          <li>Stay hydrated throughout the day</li>
          <li>Consider vitamin D and B-complex supplements</li>
          <li>Limit alcohol and caffeine consumption</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🚫 Avoid Alcohol, Tobacco, and Recreational Drugs</h2>
        <p>
          Substance use can significantly worsen mental health conditions and interfere with treatment.
          Avoiding these substances is crucial for mental health management.
        </p>
        <ul>
          <li>Avoid alcohol, especially if taking medication</li>
          <li>Don't use recreational drugs</li>
          <li>Quit smoking and avoid secondhand smoke</li>
          <li>Be cautious with caffeine - it can increase anxiety</li>
          <li>If you're struggling with substance use, seek help</li>
          <li>Find healthy alternatives for stress relief</li>
          <li>Consider joining support groups for substance recovery</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🚶 Stay Physically Active with Regular Exercise</h2>
        <p>
          Regular physical activity is one of the most effective ways to improve mental health.
          Exercise releases endorphins and can help manage symptoms of various mental disorders.
        </p>
        <ul>
          <li>Aim for at least 30 minutes of moderate exercise daily</li>
          <li>Start with activities you enjoy</li>
          <li>Try different types of exercise (cardio, strength, flexibility)</li>
          <li>Consider group fitness classes for social support</li>
          <li>Even light activities like walking or gardening help</li>
          <li>Set realistic goals and celebrate progress</li>
          <li>Consult a doctor before starting a new exercise program</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🧘 Reduce Stress Through Mindfulness and Relaxation</h2>
        <p>
          Chronic stress can worsen mental health conditions. Learning stress management techniques
          is essential for maintaining mental well-being.
        </p>
        <ul>
          <li>Practice mindfulness meditation daily</li>
          <li>Try deep breathing exercises</li>
          <li>Consider yoga or tai chi</li>
          <li>Use progressive muscle relaxation</li>
          <li>Keep a stress journal to identify triggers</li>
          <li>Learn time management techniques</li>
          <li>Practice saying "no" to avoid overcommitment</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🤝 Stay Connected with Loved Ones and Supportive Friends</h2>
        <p>
          Social connection is crucial for mental health. Maintaining relationships provides
          emotional support and helps prevent isolation.
        </p>
        <ul>
          <li>Regularly reach out to friends and family</li>
          <li>Join support groups for your specific condition</li>
          <li>Participate in community activities</li>
          <li>Practice open communication about your needs</li>
          <li>Help others when you can - it builds connection</li>
          <li>Don't be afraid to ask for help when needed</li>
          <li>Consider volunteering to build social connections</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🩺 Seek Professional Help When Needed</h2>
        <p>
          Professional mental health support is essential for managing mental disorders effectively.
          Don't hesitate to reach out for help.
        </p>
        <ul>
          <li>Regularly see a therapist or counselor</li>
          <li>Follow your treatment plan consistently</li>
          <li>Take medications as prescribed</li>
          <li>Keep appointments with healthcare providers</li>
          <li>Be honest about your symptoms and concerns</li>
          <li>Ask questions about your treatment</li>
          <li>Consider crisis hotlines if you're in immediate distress</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>📱 Take Breaks from Social Media and Digital Screens</h2>
        <p>
          Excessive screen time can negatively impact mental health. Being mindful of your
          digital consumption is important for mental well-being.
        </p>
        <ul>
          <li>Set time limits for social media use</li>
          <li>Take regular breaks from screens</li>
          <li>Avoid negative or triggering content</li>
          <li>Use apps that promote positive mental health</li>
          <li>Engage in offline activities</li>
          <li>Create tech-free zones in your home</li>
          <li>Practice digital detox periods</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🎯 Develop Healthy Coping Strategies</h2>
        <p>
          Having effective coping strategies is essential for managing mental health challenges
          and preventing symptoms from worsening.
        </p>
        <ul>
          <li>Identify your personal triggers</li>
          <li>Develop a crisis plan</li>
          <li>Practice relaxation techniques</li>
          <li>Engage in creative activities</li>
          <li>Keep a mood journal</li>
          <li>Learn cognitive behavioral techniques</li>
          <li>Build a toolkit of coping strategies</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>💪 Build Resilience and Self-Care</h2>
        <p>
          Building resilience and practicing self-care are fundamental for maintaining mental health
          and preventing the worsening of mental disorders.
        </p>
        <ul>
          <li>Practice self-compassion</li>
          <li>Engage in activities that bring you joy</li>
          <li>Maintain a routine that includes self-care</li>
          <li>Learn to recognize early warning signs</li>
          <li>Develop a strong support network</li>
          <li>Focus on your strengths and accomplishments</li>
          <li>Remember that recovery is possible and ongoing</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default DisordersPrecautions;
