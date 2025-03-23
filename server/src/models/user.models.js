import mongoose from "mongoose";
// import jwt from "jsonwebtoken"
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    // username : String, (Or define an object) best practice
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    fullName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      unique: true,
      min: [6, "password must be atleast 6 characters"],
    },
    education: {
      type: String,
      // required: true,
    },
    refreshToken: {
      type: String,
    },
    avatar: {
      type: String, // cloudinary will return url string
      // required: true,
    },
    role: {
      type: String,
      // default: "user"
    },
    nickName: {
      type: String,
      // default: "user"
    },
    ProfileComplete: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// encrypt the password before storing in the database.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // (what to hash , how many hashing rounds )
  next();
});

// checking password validation
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password); // return bool
};

export const User = mongoose.model("user", userSchema);

// the user inside of model in database will be users and in lower case.
// Note : the methods from the user schema lets us make our custome methods like the pre,
// the pre and other methods from the user schema have access to the this.password means the password saved in the database, by this we are referencing to the saved password from database .
