import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, '5a0f9014664c6aa7e625cfaa6741b1f7') as IPayload;

    req.user_id = sub;

    return next();
  } catch {
    return res.status(401).end();
  }
}