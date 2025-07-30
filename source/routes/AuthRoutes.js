import AuthController from "../controllers/AuthController.js";

import { Router } from "express";
const router = Router()

router.post("/", AuthController.login)

export default router