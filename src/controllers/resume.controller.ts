import { Request, Response } from "express";
import {
  deleteResumeDB,
  getResumeDB,
  getResumesDB,
  insertResumeDB,
  updateResumeDB,
} from "../services/resume.services.js";
import handlerSuccessHttp from "../utils/success.handler.js";
import handleErrorHttp from "../utils/error.handler.js";

// NOTE: THIS CRUD IS ONLY FOR SUPERADMIN.
// NOTE: LA INFORMACIÓN QUE ESTÁ AQUÍ NO ES PARA LOS USUARIOS, AQUÍ ESTÁN TODOS LOS RESUMES DE LA APP, NO DE UN USUARIO EN ESPECÍFICO.

// * /resumes [GET]
export const getResumes = async (req: Request, res: Response) => {
  try {
    const responseResumes = await getResumesDB();
    handlerSuccessHttp(res, 200, "RESUMES_FIND_SUCCESFULLY", responseResumes);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_GET_RESUMES", error);
  }
};

// * /resumes/:id [GET]
export const getResume = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseResume = await getResumeDB(id);
    handlerSuccessHttp(res, 200, "RESUME_FIND_SUCCESFULLY", responseResume);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_GET_RESUME", error);
  }
};

// * /resumes [POST]
export const createResume = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const responseResume = await insertResumeDB(body);
    handlerSuccessHttp(res, 201, "RESUME_CREATED_SUCCESFULLY", responseResume);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_CREATE_RESUME", error);
  }
};

// * /resumes/:id [PUT]
export const updateResume = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const responseResume = await updateResumeDB(id, body);
    handlerSuccessHttp(res, 200, "RESUME_UPDATED_SUCCESFULLY", responseResume);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_UPDATE_RESUME", error);
  }
};

// * /resumes/:id [DELETE]
export const deleteResume = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseResume = await deleteResumeDB(id);
    handlerSuccessHttp(res, 200, "RESUME_DELETED_SUCCESFULLY", responseResume);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_DELETE_RESUME", error);
  }
};
