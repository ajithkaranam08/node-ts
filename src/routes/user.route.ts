import { Router } from 'express';
import { createUserDTO } from '../dtos/user.dto';
import { validationMiddleware } from '../middlewares/validate.middleware';
import { registerUser } from '../controllers/user.controller';

const router = Router();

router.post('/register', validationMiddleware(createUserDTO), registerUser);


export default router;
