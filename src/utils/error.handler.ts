import { Response } from "express";

const handleErrorHttp = (
  res: Response,
  status: number,
  error: string,
  errorRaw?: unknown,
) => {
  res.status(status).json({
    message: error,
    error: errorRaw,
  });
};

export default handleErrorHttp;
