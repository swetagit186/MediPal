import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  name : string;
  email: string;
  phone_number: string;
  gender : string;
  _id : string;
  user_type : string;
  verified : boolean;
  bio : string;
  specialisation : string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_number: { type: String, required: false},
  gender : { type: String, required: false},
  _id: { type: String, required: true , unique: true},
  user_type: { type: String, required: true },
  verified : {type : Boolean , required: false},
  bio : {type: String, required: false },
  specialisation : {type: String, required: false},
});

// export default mongoose.model<UserDocument>('User', UserSchema);

const User = mongoose.models.User || mongoose.model<UserDocument>('User', UserSchema);

export default User;
