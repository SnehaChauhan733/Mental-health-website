import React, { useState, useEffect } from 'react';
import './DepressionConsultant.css';
import { db, auth } from '../../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';

const doctors = [
  {
    name: 'Dr. Radhika Sharma',
    specialization: 'Psychiatrist',
    qualification: 'MBBS, MD (Psychiatry)',
    experience: '10+ years',
  },
  {
    name: 'Dr. Arjun Mehta',
    specialization: 'Clinical Psychologist',
    qualification: 'M.Phil in Clinical Psychology',
    experience: '8 years',
  },
  {
    name: 'Dr. Neha Kapoor',
    specialization: 'Therapist',
    qualification: 'M.A. Psychology, CBT Certified',
    experience: '6 years',
  },
  {
    name: 'Dr. Amit Roy',
    specialization: 'Psychiatrist',
    qualification: 'MBBS, DPM',
    experience: '12 years',
  },
  {
    name: 'Dr. Sneha Bansal',
    specialization: 'Counseling Psychologist',
    qualification: 'M.A. Counseling Psych.',
    experience: '7 years',
  },
  {
    name: 'Dr. Ravi Kumar',
    specialization: 'Mental Health Consultant',
    qualification: 'PhD Psychology',
    experience: '15 years',
  },
  {
    name: 'Dr. Anjali Verma',
    specialization: 'Therapist',
    qualification: 'M.A. Psychology, REBT Certified',
    experience: '9 years',
  },
];

const DepressionConsultant = () => {
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedTimes, setSelectedTimes] = useState({});
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleDateChange = (index, date) => {
    setSelectedDates(prev => ({ ...prev, [index]: date }));
  };

  const handleTimeChange = (index, time) => {
    setSelectedTimes(prev => ({ ...prev, [index]: time }));
  };

  const handleBooking = async (index) => {
    const date = selectedDates[index];
    const time = selectedTimes[index];
    
    if (!currentUser) {
      alert("❌ Please login to book an appointment.");
      return;
    }

    if (!date) {
      alert('Please select a date before booking.');
      return;
    }

    if (!time) {
      alert('Please select a time before booking.');
      return;
    }

    try {
      await addDoc(collection(db, "appointments"), {
        uid: currentUser.uid,
        name: currentUser.displayName || currentUser.email,
        email: currentUser.email,
        date: date,
        time: time,
        doctor: doctors[index].name,
        createdAt: Timestamp.now()
      });

      alert(`✅ Appointment booked successfully with ${doctors[index].name} on ${date} at ${time}`);
      
      // Clear the form
      setSelectedDates(prev => ({ ...prev, [index]: '' }));
      setSelectedTimes(prev => ({ ...prev, [index]: '' }));
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("❌ Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="consultant-page">
      <header className="consultant-header">
        <h1>Consult a Specialist for Depression</h1>
        <p>Select a professional below, choose a date, and book an appointment.</p>
      </header>

      <section className="doctor-list">
        {doctors.map((doc, index) => (
          <div key={index} className="doctor-card">
            <h2>{doc.name}</h2>
            <p><strong>Specialization:</strong> {doc.specialization}</p>
            <p><strong>Qualification:</strong> {doc.qualification}</p>
            <p><strong>Experience:</strong> {doc.experience}</p>
            <div className="date-select">
              <label>Select Date: </label>
              <input
                type="date"
                value={selectedDates[index] || ''}
                onChange={(e) => handleDateChange(index, e.target.value)}
              />
            </div>
            <div className="time-select">
              <label>Select Time: </label>
              <select
                value={selectedTimes[index] || ''}
                onChange={(e) => handleTimeChange(index, e.target.value)}
              >
                <option value="">Choose time</option>
                <option value="9:00 AM">9:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="3:00 PM">3:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="5:00 PM">5:00 PM</option>
              </select>
            </div>
            <button className="book-btn" onClick={() => handleBooking(index)}>
              Book Appointment
            </button>
          </div>
        ))}
      </section>

      <footer className="footer">
        <p>© 2025 HealSpace • Empowering Mental Wellness</p>
      </footer>
    </div>
  );
};

export default DepressionConsultant;
