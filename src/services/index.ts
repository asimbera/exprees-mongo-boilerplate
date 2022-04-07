import { RequestHandler } from 'express';

export const helloService: RequestHandler = (req, res) => {
  res.status(200).json({ message: 'Hello World!' });
};
