import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// export default mongoose.model<UserDocument>('User', UserSchema);

const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

export default User;
