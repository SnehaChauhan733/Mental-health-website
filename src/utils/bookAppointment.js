// src/utils/bookAppointment.js
import { db } from "../firebase";

import { collection, addDoc, Timestamp } from "firebase/firestore";

export const bookAppointment = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "appointments"), {
      ...data,
      createdAt: Timestamp.now(),
    });
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Booking Error:", error);
    return { success: false, error: error.message };
  }
};
