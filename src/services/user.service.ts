import { CreateUserDTO } from "dtos/user.dto";
import { User } from "../models/user.model";


export async function registerUser(params: CreateUserDTO) {
  try {

    const createdUser = await User.create(params)
    return createdUser;
  } catch (err) {
    throw err
  }
}