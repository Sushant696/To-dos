import mongoose , {Schema,model} from "mongoose";

const userDetailSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
  universityName: {
    type: String,
  },
  skills: {
    type: [],
    required: true,
  },
  role: { type: String },
  projects: {
    type: [],
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  avatar :{
    type : String , // cloudinary will return url string
    required : true,

  }
});

export const userDetails = model("userDetails", userDetailSchema);
