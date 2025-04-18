import { Request, Response, NextFunction } from 'express';
import { Schema } from 'zod';

export function validationMiddleware(schema: Schema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return void res.status(400).json(result.error.format());
    }
    next();
  };
}
