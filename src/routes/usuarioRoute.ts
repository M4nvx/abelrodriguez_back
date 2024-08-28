import { Router } from "express";
import { getAllAsync, getByIdAsync, register } from "../controllers/usuario";

const usuarioRoute = Router();
usuarioRoute.post("/api/usuario/register", register);
usuarioRoute.get("/api/usuario/getAll", getAllAsync);
usuarioRoute.get("/api/usuario/getById", getByIdAsync);

export default usuarioRoute;