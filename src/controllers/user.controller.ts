import { Response, NextFunction } from 'express';
import * as userService from '../services/user.service';
import { CreateUserDTO } from '../dtos/user.dto';
import { RequestTyped } from 'types/request';

export async function registerUser(req: RequestTyped<CreateUserDTO, { status?: boolean }>, res: Response, next: NextFunction) {
  try {
    const createdUser = await userService.registerUser(req.body);
    return void res.status(200).json({
      message: 'User registered successfully',
      user: createdUser,
    });
  } catch (err) {
    next(err);
  }
}
