import { Router } from "express";
import { deleteAsync, getAsync, getByIdUsuarioAsync, register, updateAsync } from "../controllers/expediente";

const expedienteRoute = Router();
expedienteRoute.post("/register", register);
expedienteRoute.get("/usuario/:id", getByIdUsuarioAsync);
expedienteRoute.get("/:id", getAsync);
expedienteRoute.delete('/:id', deleteAsync);
expedienteRoute.put('/:id',  updateAsync);

export default expedienteRoute;