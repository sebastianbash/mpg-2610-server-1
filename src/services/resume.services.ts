import { Resume } from "../interfaces/resume.interface.js";
import ResumeModel from "../models/Resume.js";

// * Service - insertResume
const insertResumeDB = async (resume: Resume) => {
  const responseInsert = await ResumeModel.create(resume);
  return responseInsert;
};

// * Service - getResumes
const getResumesDB = async () => {
  const responseGet = await ResumeModel.find({});
  return responseGet;
};

// * Service - getResume
const getResumeDB = async (id: string) => {
  const responseGet = await ResumeModel.findOne(
    // ({ _id: id })
    {
      $or: [
        {
          _id: id,
        },
        {
          owner: id,
        },
      ],
    },
  ).populate("owner");
  return responseGet;
};

// * Service - updateResume
const updateResumeDB = async (id: string, resume: Resume) => {
  const responseUpdate = await ResumeModel.findOneAndUpdate(
    // ({ _id: id }, resume, { new: true });
    {
      $or: [
        {
          _id: id,
        },
        {
          owner: id,
        },
      ],
    },
    resume,
    {
      new: true,
    },
  );
  return responseUpdate;
};

// * Service - deleteResume
const deleteResumeDB = async (id: string) => {
  const responseDelete = await ResumeModel.remove({
    $or: [
      {
        _id: id,
      },
      {
        owner: id,
      },
    ],
  });
  return responseDelete;
};

export {
  insertResumeDB,
  getResumesDB,
  getResumeDB,
  updateResumeDB,
  deleteResumeDB,
};
