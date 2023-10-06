import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

UserSchema.methods.verifyPassword = function(password:string) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, 10);
  }
  next();
});

export const User = mongoose.model('User', UserSchema);
