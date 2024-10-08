import mongoose from "mongoose";
// `https://api.dicebear.com/5.x/initials/svg?seed=${firstName}+${lastName}`
const userSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },

    profilePic: {
      type: String,
      required: true,
    },
    previousResults: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "heart",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
