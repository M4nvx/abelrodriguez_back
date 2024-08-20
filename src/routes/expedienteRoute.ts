import { Router } from "express";
import { register } from "../controllers/expediente";

const expedienteRoute = Router();
expedienteRoute.post("/api/expediente/register", register);

export default expedienteRoute;