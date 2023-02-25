import { Resume } from "interfaces/resume.interface.js";
import { Schema, Types, model } from "mongoose";

const ResumeSchema = new Schema<Resume>(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
      default: "CA 123 Example St.",
    },
    summary: {
      type: String,
      required: true,
    },
    goal: {
      type: String,
      required: true,
    },
    education: {
      type: [String],
      required: true,
    },
    experience: {
      type: [String],
      required: true,
    },
    skills: {
      type: [String],
      required: true,
    },
    achievements: {
      type: [String],
      required: true,
    },
    references: {
      type: [String],
      required: true,
    },
    owner: {
      type: Types.ObjectId,
      ref: "users",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const ResumeModel = model("resumes", ResumeSchema);
export default ResumeModel;
