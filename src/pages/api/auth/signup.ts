import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import User, { UserDocument } from '@/models/User';

// dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }
  await dbConnect();
  const { name, email, password  , phoneNumber} = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const newUser: UserDocument = new User({
      name,
      email,
      password,
      "phone_number" : phoneNumber
    });

    await newUser.save();

    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(500).json({ error: `Something went wrong , ${error}`});
  }
}
