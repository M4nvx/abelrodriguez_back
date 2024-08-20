import { Router } from "express";
import { register } from "../controllers/auth";

const casoRoute = Router();
casoRoute.post("/api/caso/register", register);

export default casoRoute;