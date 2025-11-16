import React from "react";
import "./DepressionPrecautions.css";
import Footer from "../../components/Footer/Footer";

const DepressionPrecautions = () => {
  return (
    <div className="depression-precaution-container">
      <div className="precautions-header">
        <div className="logo-container">
          <img src="/logo.png" alt="HealSpace Logo" className="healspace-logo" />
        </div>
        <h1>🛡️ Precautions to Manage <span className="highlight">Depression</span></h1>
        <p>
          While depression requires professional support, there are comprehensive precautions you can take to
          reduce its severity and improve your mental well-being. Here's a detailed guide to help you on your journey:
        </p>
      </div>

      <div className="precaution-section">
        <h2>🛌 Maintain a Consistent Sleep Schedule</h2>
        <p>
          Quality sleep is crucial for mental health. Depression often disrupts sleep patterns,
          so establishing a healthy sleep routine can significantly improve your mood and energy levels.
        </p>
        <ul>
          <li>Go to bed and wake up at the same time every day</li>
          <li>Create a relaxing bedtime routine</li>
          <li>Keep your bedroom cool, dark, and quiet</li>
          <li>Avoid screens 1 hour before bedtime</li>
          <li>Limit caffeine intake, especially in the afternoon</li>
          <li>If you can't sleep, get up and do something relaxing</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🥗 Eat a Healthy and Balanced Diet</h2>
        <p>
          Nutrition plays a vital role in mental health. Certain foods can help boost mood
          and energy levels while others may worsen depression symptoms.
        </p>
        <ul>
          <li>Include omega-3 fatty acids (fish, nuts, seeds)</li>
          <li>Eat regular meals to maintain stable blood sugar</li>
          <li>Include plenty of fruits and vegetables</li>
          <li>Limit processed foods and sugar</li>
          <li>Stay hydrated throughout the day</li>
          <li>Consider vitamin D supplements if needed</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🚶 Stay Physically Active and Exercise Regularly</h2>
        <p>
          Exercise is one of the most effective natural antidepressants. Regular physical activity
          releases endorphins and can help improve mood, energy, and self-esteem.
        </p>
        <ul>
          <li>Start with small, manageable activities like walking</li>
          <li>Aim for at least 30 minutes of moderate exercise daily</li>
          <li>Try activities you enjoy to maintain consistency</li>
          <li>Consider joining group fitness classes for social support</li>
          <li>Even light activities like gardening or dancing help</li>
          <li>Set realistic goals and celebrate small achievements</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🚫 Limit Alcohol and Avoid Drugs</h2>
        <p>
          Alcohol and drugs can worsen depression symptoms and interfere with treatment.
          They may provide temporary relief but ultimately make depression worse.
        </p>
        <ul>
          <li>Avoid alcohol, especially if you're taking medication</li>
          <li>Don't use recreational drugs</li>
          <li>Be cautious with caffeine - it can increase anxiety</li>
          <li>If you're struggling with substance use, seek help</li>
          <li>Find healthy alternatives for stress relief</li>
          <li>Consider joining support groups if needed</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🤝 Stay Connected with Supportive Friends and Family</h2>
        <p>
          Social connection is essential for mental health. Isolation can worsen depression,
          so maintaining relationships is crucial for recovery.
        </p>
        <ul>
          <li>Reach out to trusted friends and family members</li>
          <li>Join support groups for people with depression</li>
          <li>Consider therapy or counseling</li>
          <li>Practice open communication about your feelings</li>
          <li>Help others when you can - it builds connection</li>
          <li>Don't be afraid to ask for help when needed</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🧘 Practice Mindfulness and Meditation</h2>
        <p>
          Mindfulness techniques can help you stay present and reduce negative thinking patterns
          that often accompany depression.
        </p>
        <ul>
          <li>Start with 5-10 minutes of meditation daily</li>
          <li>Try guided meditation apps or videos</li>
          <li>Practice deep breathing exercises</li>
          <li>Use mindfulness during daily activities</li>
          <li>Consider yoga or tai chi classes</li>
          <li>Keep a gratitude journal</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>📱 Limit Screen Time and Negative Content</h2>
        <p>
          Excessive screen time and negative content can worsen depression symptoms.
          Being mindful of your media consumption is important for mental health.
        </p>
        <ul>
          <li>Set time limits for social media use</li>
          <li>Avoid doomscrolling and negative news</li>
          <li>Unfollow accounts that make you feel worse</li>
          <li>Take regular breaks from screens</li>
          <li>Engage in offline activities</li>
          <li>Use apps that promote positive content</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🎯 Set Small, Achievable Goals</h2>
        <p>
          Depression can make even simple tasks feel overwhelming. Setting small,
          achievable goals can help build confidence and momentum.
        </p>
        <ul>
          <li>Break large tasks into smaller steps</li>
          <li>Celebrate small victories</li>
          <li>Don't be too hard on yourself</li>
          <li>Focus on progress, not perfection</li>
          <li>Keep a journal of accomplishments</li>
          <li>Ask for help when tasks feel too difficult</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>💪 Build Resilience and Self-Care</h2>
        <p>
          Building resilience and practicing self-care are essential for managing depression
          and preventing relapse.
        </p>
        <ul>
          <li>Develop healthy coping strategies</li>
          <li>Practice self-compassion</li>
          <li>Engage in activities that bring you joy</li>
          <li>Learn stress management techniques</li>
          <li>Maintain a routine that includes self-care</li>
          <li>Remember that recovery is a journey, not a destination</li>
        </ul>
      </div>

      <div className="precaution-section">
        <h2>🆘 Don't Isolate Yourself — Ask for Help</h2>
        <p>
          Remember that asking for help is a sign of strength, not weakness.
          You don't have to face depression alone.
        </p>
        <ul>
          <li>Reach out to mental health professionals</li>
          <li>Talk to your doctor about treatment options</li>
          <li>Consider therapy or counseling</li>
          <li>Join support groups</li>
          <li>Let trusted people know how you're feeling</li>
          <li>Remember that help is available and recovery is possible</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default DepressionPrecautions;
