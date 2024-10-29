import { Router } from "express";
import { login, register } from "../controllers/auth";

const authRoute = Router();
authRoute.post("/register", register);
authRoute.post("/authenticate", login);

export default authRoute;