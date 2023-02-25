import { User } from "../interfaces/user.interface.js";
import UserModel from "../models/User.js";

// * Service - insertUser
const insertUserDB = async (user: User) => {
  const responseInsert = await UserModel.create(user);
  return responseInsert;
};

// * Service - getUsers
const getUsersDB = async () => {
  const responseGet = await UserModel.find({});
  return responseGet;
};

// * Service - getUser
const getUserDB = async (id: string) => {
  const responseGet = await UserModel.findOne({ _id: id });
  return responseGet;
};

// * Service - updateUser
const updateUserDB = async (id: string, user: User) => {
  const responseUpdate = await UserModel.findOneAndUpdate({ _id: id }, user, {
    new: true,
  });
  return responseUpdate;
};

// * Service - deleteUser
const deleteUserDB = async (id: string) => {
  const responseDelete = await UserModel.remove({ _id: id });
  return responseDelete;
};

export { insertUserDB, getUsersDB, getUserDB, updateUserDB, deleteUserDB };
