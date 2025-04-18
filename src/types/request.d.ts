import { UserDTO } from 'dtos/user.dto';
import { Request } from 'express';

export type RequestTyped<TBody = {}, TQuery = {}> = Request<{}, {}, TBody, TQuery>;

export interface AuthenticatedRequest extends Request {
    auth?: UserDTO;
}

