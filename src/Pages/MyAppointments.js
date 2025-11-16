// MyAppointments.js
import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = auth.currentUser;
      if (!user) {
        setLoading(false);
        return;
      }

      const q = query(collection(db, "appointments"), where("email", "==", user.email));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAppointments(data);
    } catch (err) {
      console.error("Error fetching appointments:", err);
      setError("Failed to load appointments. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "appointments", id));
      fetchAppointments(); // refresh after delete
    } catch (err) {
      console.error("Error deleting appointment:", err);
      alert("Failed to delete appointment. Please try again.");
    }
  };

  const handleReschedule = async (id) => {
    const newDate = prompt("Enter new date (YYYY-MM-DD):");
    const newTime = prompt("Enter new time (e.g., 3:00 PM):");
    if (newDate && newTime) {
      try {
        await updateDoc(doc(db, "appointments", id), {
          date: newDate,
          time: newTime,
        });
        fetchAppointments(); // refresh after update
      } catch (err) {
        console.error("Error rescheduling appointment:", err);
        alert("Failed to reschedule appointment. Please try again.");
      }
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="appointments-container">
      <h2>My Appointments</h2>
      {loading ? (
        <p>Loading appointments...</p>
      ) : error ? (
        <div>
          <p style={{ color: 'red' }}>{error}</p>
          <button onClick={fetchAppointments}>Retry</button>
        </div>
      ) : appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul>
          {appointments.map((appt) => (
            <li key={appt.id}>
              <strong>{appt.doctor}</strong> on <em>{appt.date}</em> at <em>{appt.time}</em>
              <button onClick={() => handleDelete(appt.id)}>Delete</button>
              <button onClick={() => handleReschedule(appt.id)}>Reschedule</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyAppointments;
