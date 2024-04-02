// models/Appointment.ts
import mongoose, { Document } from 'mongoose';

export interface Appointment extends Document {
  doctor_id: mongoose.Types.ObjectId| string;
  user_id: mongoose.Types.ObjectId | string;
  patient_name: string;
  patient_problem: string;
  patient_history: string;
  date: Date;
  doctor_name: string;
  doctor_specialization: string;
  user_name: string;
}

const appointmentSchema = new mongoose.Schema({
  doctor_id: { type: mongoose.Types.ObjectId, required: true },
  user_id: { type: mongoose.Types.ObjectId, required: true },
  patient_name: { type: String, required: true },
  patient_problem: { type: String, required: true },
  patient_history: { type: String, required: true },
  date: { type: Date, required: true },
  doctor_name: { type: String, required: true },
  doctor_specialization: { type: String, required: true },
  user_name: { type: String, required: true },
});

export default mongoose.models.Appointment || mongoose.model<Appointment>('Appointment', appointmentSchema);
