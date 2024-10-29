import { Router } from "express";
import { deleteAsync, getAsync, getByIdUsuarioAsync, register, updateAsync } from "../controllers/expediente";
import validateToken from "../utils/validateToken";

const expedienteRoute = Router();
expedienteRoute.post("/register", validateToken, register);
expedienteRoute.get("/usuario/:id", validateToken, getByIdUsuarioAsync);
expedienteRoute.get("/:id", validateToken, getAsync);
expedienteRoute.delete('/:id', validateToken, deleteAsync);
expedienteRoute.put('/:id', validateToken, updateAsync);

export default expedienteRoute;