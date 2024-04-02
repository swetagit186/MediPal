// pages/api/appointments/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';


const appointmentsHandler =  async (req: NextApiRequest, res: NextApiResponse) => {
    console.log(req.method ,"called ");
     
    await dbConnect();
  if (req.method === 'POST') {
    try {
      const appointment = new Appointment(req.body);
      await appointment.save();
      res.status(201).json({ success: true, data: appointment });
    } catch (error) {
      res.status(500).json({ success: false, error: `Something went wrong ${error}` });
    }
  } else if (req.method === 'GET') {
    try {
      const appointments = await Appointment.find();
      res.status(200).json({ success: true, data: appointments });
    } catch (error) {
      res.status(500).json({ success: false, error: `Something went wrong ${error}` });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default appointmentsHandler;
