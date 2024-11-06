import { Router } from "express";
import { deleteAsync, getAllAsync, getAsync, register, updateAsync } from "../controllers/usuario";
import validateToken from "../utils/validateToken";

const usuarioRoute = Router();
usuarioRoute.post("/register", validateToken, register);
usuarioRoute.get("/getAll", validateToken, getAllAsync);
usuarioRoute.get("/:id", validateToken, getAsync);
usuarioRoute.delete('/:id', validateToken, deleteAsync);
usuarioRoute.put('/:id', validateToken, updateAsync);

export default usuarioRoute;