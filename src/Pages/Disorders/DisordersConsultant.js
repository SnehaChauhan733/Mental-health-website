import React from "react";
import "./DisordersConsultant.css";

const DisordersConsultant = () => {
  const doctors = [
    {
      name: "Dr. Meera Kapoor",
      qualification: "Ph.D. in Neuropsychology",
      experience: "12+ years",
      specialization: "Personality & Mood Disorders",
    },
    {
      name: "Dr. Aditya Rana",
      qualification: "MBBS, MD Psychiatry",
      experience: "9+ years",
      specialization: "Bipolar Disorder, OCD, PTSD",
    },
    {
      name: "Dr. Sneha Nair",
      qualification: "M.Phil in Clinical Psychology",
      experience: "8+ years",
      specialization: "Borderline Personality Disorder",
    },
    {
      name: "Dr. Vikram Joshi",
      qualification: "MBBS, DPM",
      experience: "10+ years",
      specialization: "Schizophrenia, Dissociative Disorders",
    },
    {
      name: "Dr. Nidhi Saxena",
      qualification: "Ph.D. in Mental Health",
      experience: "11+ years",
      specialization: "Eating Disorders & Identity Disorders",
    },
    {
      name: "Dr. Karan Thakur",
      qualification: "MBBS, MD Psychiatry",
      experience: "7+ years",
      specialization: "Mood Swings & Conduct Disorders",
    },
    {
      name: "Dr. Ananya Desai",
      qualification: "M.Phil in Psychiatric Social Work",
      experience: "6+ years",
      specialization: "Personality & Behavioral Disorders",
    },
  ];

  return (
    <div className="disorders-container">
      <h1>Consult a Specialist - Personality & Mental Disorders</h1>
      <div className="doctor-grid">
        {doctors.map((doc, index) => (
          <div className="doctor-card" key={index}>
            <h3>{doc.name}</h3>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <label>
              <strong>Select Appointment Date:</strong><br />
              <input type="date" className="date-picker" />
            </label>
            <button className="book-btn">Book Appointment</button>
          </div>
        ))}
      </div>
      <footer className="disorders-footer">
        <p>&copy; 2025 HealSpace. All rights reserved. | Supporting You Through Every Disorder</p>
      </footer>
    </div>
  );
};

export default DisordersConsultant;
