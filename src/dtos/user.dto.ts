import { z } from 'zod';

// Define a DTO schema
export const userDTO = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export const createUserDTO = userDTO.omit({ id: true });

export type CreateUserDTO = z.infer<typeof createUserDTO>;
export type UserDTO = z.infer<typeof userDTO>;
