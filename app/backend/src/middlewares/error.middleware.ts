import { NextFunction, Request, Response } from 'express';

interface IError {
  status: number;
  message: string;
}

const errorMiddleware = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const { status, message } = err as IError;
  res.status(status || 500).json({ message });
};

export default errorMiddleware;
