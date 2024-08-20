import { Router } from "express";
import { register } from "../controllers/documento";

const documentoRoute = Router();
documentoRoute.post("/api/documento/register", register);

export default documentoRoute;