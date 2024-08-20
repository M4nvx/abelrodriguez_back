import { Router } from "express";
import { register } from "../controllers/sentencia";

const sentenciaRoute = Router();
sentenciaRoute.post("/api/setencia/register", register);

export default sentenciaRoute;