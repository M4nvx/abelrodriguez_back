import { Router } from "express";
import { register } from "../controllers/resolucion";

const routerResolucion = Router();
routerResolucion.post("/api/resolucion/register", register);

export default routerResolucion;