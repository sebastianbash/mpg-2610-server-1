import { Response } from "express";

const handlerSuccessHttp = (
  res: Response,
  status: number,
  message: string,
  data?: unknown | null,
) => {
  res.status(status).json({
    message: message,
    data: data,
  });
};

export default handlerSuccessHttp;
