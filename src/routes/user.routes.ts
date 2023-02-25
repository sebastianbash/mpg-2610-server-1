import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
} from "../controllers/user.controller.js";
import { Router } from "express";
import checkJwt from "../middlewares/session.js";

const router = Router();

// NOTE: PERMISSION ACCESS ONLY FOR ADMIN AND SUPERADMIN.

// * http://localhost:4000/api/v1/users/  [GET]
router.get("/users", checkJwt, getUsers);

// * http://localhost:4000/api/v1/users/1  [GET]
router.get("/users/:id", checkJwt, getUser);

// * http://localhost:4000/api/v1/users/  [POST]
router.post("/users", checkJwt, createUser);

// * http://localhost:4000/api/v1/users/1  [PUT]
router.put("/users/:id", checkJwt, updateUser);

// * http://localhost:4000/api/v1/users/1  [DELETE]
router.delete("/users/:id", checkJwt, deleteUser);

export default router;
