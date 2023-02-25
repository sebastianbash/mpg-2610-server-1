import { Router } from "express";
import {
  deleteResume,
  updateResume,
  createResume,
  getResume,
  getResumes,
} from "../controllers/resume.controller.js";
import checkJwt from "../middlewares/session.js";
// NOTE: PERMISSION ACCESS ONLY FOR ADMIN, SUPERUSER, USER.

const router = Router();

// * http://localhost:4000/api/v1/_id/resumes/  [GET]
router.get("/:id/resumes", checkJwt, getResumes);

// * http://localhost:4000/api/v1/_id/resumes/:id  [GET]
router.get("/:id/resumes/:id", checkJwt, getResume);

// * http://localhost:4000/api/v1/_id/resumes/  [POST]
router.post("/:id/resumes", checkJwt, createResume);

// * http://localhost:4000/api/v1/_id/resumes/:id  [PUT]
router.put("/:id/resumes/:id", checkJwt, updateResume);

// * http://localhost:4000/api/v1/_id/resumes/:id  [DELETE]
router.delete("/:id/resumes/:id", checkJwt, deleteResume);

export default router;
