import mongoose from "mongoose";
// import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema(
  {
    // username : String, (Or define an object) best practice
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
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
    refreshToken: {
      type: String
    }
  },
  { timestamps: true }
);


// encrypt the password before storing in the database.
userSchema.pre("save", async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10) // (what to hash , how many hashing rounds )
  next()
})

// checking password validation
userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password) // return bool
}


// these methods will be avaliable in the user document in all instance of the user model
// userSchema.methods.generateAccessToken = function () {
//   return jwt.sign({
//     _id: this._id,
//     email: this.email, // email is payload/(data) name  and this.email is comming from database so we are referencing with this
//     username: this.username
//   },
//     process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: process.env.ACCESS_TOKEN_EXPIRY
//   })
// }
// userSchema.methods.generateRefreshToken = function () {
//   return jwt.sign(
//     {
//       _id: this._id,

//     }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: process.env.REFRESH_TOKEN_EXPIRY
//   }
//   )
// }

export const User = mongoose.model("user", userSchema); // the user inside of model in database will be users and in lower case.


// Note : the methods from the user schema lets us make our custome methods like the pre,
// the pre and other methods from the user schema have access to the this.password means the password saved in the database, by this we are referencing to the saved password from database .
