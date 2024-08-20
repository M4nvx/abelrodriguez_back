import { Router } from "express";
import { getAllAsync, register } from "../controllers/usuario";

const usuarioRoute = Router();
usuarioRoute.post("/api/usuario/register", register);
usuarioRoute.get("/api/usuario/getAll", getAllAsync);

export default usuarioRoute;