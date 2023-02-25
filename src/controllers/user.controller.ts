import { Request, Response } from "express";
import {
  insertUserDB,
  getUsersDB,
  getUserDB,
  updateUserDB,
  deleteUserDB,
} from "../services/user.services.js";
import handlerSuccessHttp from "../utils/success.handler.js";
import handleErrorHttp from "../utils/error.handler.js";

// * /users [GET]
export const getUsers = async (req: Request, res: Response) => {
  try {
    const responseUsers = await getUsersDB();
    handlerSuccessHttp(res, 200, "USERS_FIND_SUCCESFULLY", responseUsers);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_GET_USERS", error);
  }
};

// * /users/:id [GET]
export const getUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseUser = await getUserDB(id);
    handlerSuccessHttp(res, 200, "USER_FIND_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_GET_USER", error);
  }
};

// * /users [POST]
export const createUser = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const responseUser = await insertUserDB(body);
    handlerSuccessHttp(res, 201, "USER_CREATED_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_CREATE_USER", error);
  }
};

// * /users/:id [PUT]
export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const responseUser = await updateUserDB(id, body);
    handlerSuccessHttp(res, 200, "USER_UPDATED_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_UPDATE_USER", error);
  }
};

// * /users/:id [DELETE]
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseUser = await deleteUserDB(id);
    handlerSuccessHttp(res, 200, "USER_DELETED_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_DELETE_USER", error);
  }
};
