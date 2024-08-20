import { Router } from "express";
import { login, register } from "../controllers/auth";

const authRoute = Router();
authRoute.post("/api/auth/register", register);
authRoute.post("/api/auth/login", login);

export default authRoute;