import { User } from "../interfaces/user.interface.js";
import { Schema, Types, model } from "mongoose";

const UserSchema = new Schema<User>(
  {
    name: {
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
    role: {
      type: String,
      enum: ["superadmin", "admin", "superuser", "user"],
      default: "user",
      required: false,
    },
    resumes: [
      {
        type: Types.ObjectId,
        ref: "resumes",
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const UserModel = model("users", UserSchema);
export default UserModel;
