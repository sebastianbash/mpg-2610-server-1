import { Request, Response } from "express";
import handleErrorHttp from "../utils/error.handler.js";
import handlerSuccessHttp from "../utils/success.handler.js";
import { loginUser, registerNewUser } from "../services/auth.services.js";

// * /register [POST]
const registerCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const responseUser = await registerNewUser(body);
    handlerSuccessHttp(res, 201, "USER_CREATED_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_CREATE_USER", error);
  }
};

// * /login [POST]
const loginCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const { email, password } = body;
    const responseUser = await loginUser({ email, password });
    handlerSuccessHttp(res, 200, "USER_LOGIN_SUCCESFULLY", responseUser);
  } catch (error) {
    handleErrorHttp(res, 500, "ERROR_LOGIN_USER", error);
  }
};

export { registerCtrl, loginCtrl };
