
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "Please enter username"],
  },
  email: {
    type: String,
    require: [true, "Please enter email"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Please enter password"],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
