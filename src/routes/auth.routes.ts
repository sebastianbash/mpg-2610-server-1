import { loginCtrl, registerCtrl } from "../controllers/auth.controller.js";
import { Router } from "express";

const router = Router();

// * http://localhost:4000/api/v1/auth/register [POST]
router.post("/register", registerCtrl);

// * http://localhost:4000/api/v1/auth/login [POST]
router.post("/login", loginCtrl);

export default router;
