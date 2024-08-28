import { Router } from "express";
import { deleteAsync, getAllAsync, getAsync, register, updateAsync } from "../controllers/usuario";

const usuarioRoute = Router();
usuarioRoute.post("/register", register);
usuarioRoute.get("/getAll", getAllAsync);
usuarioRoute.get("/:id", getAsync);
usuarioRoute.delete('/:id', deleteAsync);
usuarioRoute.put('/:id',  updateAsync);

export default usuarioRoute;