import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
  _id: {
    type: String,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  userName: {
    type: String,
  },
  profilePicture: {
    type: String
  }
  
});

const User = mongoose.model("User", userSchema);

export { User };
