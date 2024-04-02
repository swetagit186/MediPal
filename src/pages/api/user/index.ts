import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/lib/dbConnect';
import User, { UserDocument } from '@/models/User';

// dbConnect();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await dbConnect();
  if (req.method === "GET") {
    //     return res.status(405).end(); // Method Not Allowed
    //   }

    const { id, name, email, password, phoneNumber } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ error: "Email already exists" });
      }
      console.log(req.body);
      const newUser: UserDocument = new User({
        //   req.bodyk
      });

      await newUser.save();

      res.status(201).json({ user: newUser });
    } catch (error) {
      res.status(500).json({ error: `Something went wrong , ${error}` });
    }
  } else if (req.method === "POST") {
    try {
      const { _id, name, email } = req.body;
      const existingUser = await User.findOne({ _id });
        console.log(req.body);
      if (existingUser) {
        return res.status(200).json({ user: existingUser });
      }
      console.log("New user created");
      const newUser: UserDocument = new User({
        name,
        email,
        phone_number: "",
        gender: "Male",
        _id: _id,
        user_type: "patient",
        verified: false,
        bio: "",
        specialisation: "",
      });

      await newUser.save();

      return res.status(200).json({ user: newUser });
    } catch (err) {
      return res.status(500).json({ error: err });
    }
  }
}


// import { NextApiRequest, NextApiResponse } from 'next';
// import dbConnect from '@/lib/dbConnect';
// import User, { UserDocument } from '@/models/User';



// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).end(); // Method Not Allowed
//   }
//   await dbConnect();

//   const { email, password } = req.body;

//   try {
//     const user: UserDocument | null = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }

//     // You can generate a JWT token here if needed
//     // const token = generateToken(user.id);

//     res.status(200).json({ user });
//   } catch (error) {
//     res.status(500).json({ error: `Something went wrong ${error}` });
//   }
// }
