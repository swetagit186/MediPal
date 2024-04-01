import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import User, { UserDocument } from '@/models/User';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }
  await dbConnect();

  const { email, password } = req.body;

  try {
    const user: UserDocument | null = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // You can generate a JWT token here if needed
    // const token = generateToken(user.id);

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: `Something went wrong ${error}` });
  }
}
