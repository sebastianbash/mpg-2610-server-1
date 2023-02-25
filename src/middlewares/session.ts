import { NextFunction, Response } from "express";
import handleErrorHttp from "../utils/error.handler.js";
import { RequestExt } from "../interfaces/request-ext.interface.js";
import { verifyToken } from "../utils/jwt.handle.js";

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const jwt = jwtByUser.split(" ").pop();
    const isUserFound = verifyToken(`${jwt}`) as { id: string };
    if (!isUserFound) {
      handleErrorHttp(res, 401, "VALID_TOKEN_NOT_PROVIDED");
    } else {
      req.user = isUserFound;
      next();
    }
  } catch (e) {
    console.log({ e });
    handleErrorHttp(res, 400, "SESSION_NOT_VALIDATED");
  }
};

export default checkJwt;
