import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  name : string;
  email: string;
  password: string;
  phone_number: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone_number: { type: String, required: false, unique: true},
});

// export default mongoose.model<UserDocument>('User', UserSchema);

const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

export default User;
