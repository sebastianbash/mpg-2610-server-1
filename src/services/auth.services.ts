import { Auth } from "../interfaces/auth.interface.js";
import { User } from "../interfaces/user.interface.js";
import UserModel from "../models/User.js";
import { encrypt, verified } from "../utils/bcrypt.handle.js";
import { generateToken } from "../utils/jwt.handle.js";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;
  const userFound = await UserModel.findOne({ email });
  if (userFound) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const newUser = await UserModel.create({ email, password: passHash, name });

  // TODO: retornar mensaje de respuesta con un status.
  return newUser;
};

const loginUser = async (authUser: Auth) => {
  const { email, password } = authUser;
  const userFound = await UserModel.findOne({ email });
  if (!userFound) return "NOT_FOUND_USE";

  const passHash = userFound.password;
  const isCorrect = await verified(password, passHash);

  if (!isCorrect) return "INCORRECT_PASS";

  const token = generateToken(userFound.email);

  return token;
};

export { registerNewUser, loginUser };
