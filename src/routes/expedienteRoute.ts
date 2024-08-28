import { Router } from "express";
import { getByIdAsync, getByIdUsuarioAsync, register } from "../controllers/expediente";

const expedienteRoute = Router();
expedienteRoute.post("/api/expediente/register", register);
expedienteRoute.get("/api/expediente/getByIdUsuario", getByIdUsuarioAsync);
expedienteRoute.get("/api/expediente/getById", getByIdAsync);

export default expedienteRoute;