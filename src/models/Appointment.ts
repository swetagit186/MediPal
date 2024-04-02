// models/Appointment.ts
import mongoose, { Document } from 'mongoose';

export interface Appointment extends Document {
  doctor_id: string;
  user_id: string;
  patient_problem: string;
  patient_history: string;
  date: Date;
  doctor_name: string;
  doctor_specialization: string;
  user_name: string;
}

const appointmentSchema = new mongoose.Schema({
  doctor_id: { type: String, required: true },
  user_id: { type: String, required: true },
  patient_problem: { type: String, required: false },
  patient_history: { type: String, required: false },
  date: { type: Date, required: true },
  doctor_name: { type: String, required: true },
  doctor_specialization: { type: String, required: true },
  user_name: { type: String, required: true },
});

export default mongoose.models.Appointment || mongoose.model<Appointment>('Appointment', appointmentSchema);
