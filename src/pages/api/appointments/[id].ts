
import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import Appointment from '@/models/Appointment';


const appointmentsHandlerById = async (req: NextApiRequest, res: NextApiResponse) => {
    const { id } = req.query;

await dbConnect();
if (req.method === 'GET') {
    try {
      // const appointment = await Appointment.findById(id);
      const appointment = await Appointment.find({ user_id: id });

      if (!appointment) {
        return res.status(404).json({ success: false, error: 'Appointment not found' });
      }
      res.status(200).json({ success: true, data: appointment });
    } catch (error) {
      res
        .status(500)
        .json({ success: false, error: `Something went wrong ${error}` });
    }
  } else if (req.method === 'DELETE') {
    try {
      const deletedAppointment = await Appointment.findByIdAndDelete(id);
      if (!deletedAppointment) {
        return res.status(404).json({ success: false, error: 'Appointment not found' });
      }
      res.status(200).json({ success: true, data: deletedAppointment });
    } catch (error) {
      res.status(500).json({ success: false, error: `Something went wrong ${error}` });
    }
  }else  if (req.method === 'PUT') {
    try {
      const updatedAppointment = await Appointment.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!updatedAppointment) {
        return res.status(404).json({ success: false, error: 'Appointment not found' });
      }
      res.status(200).json({ success: true, data: updatedAppointment });
    } catch (error) {
      res.status(500).json({ success: false, error: `Something went wrong ${error}` });
    }
}else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
};

export default appointmentsHandlerById;
