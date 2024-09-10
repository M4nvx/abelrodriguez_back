import { Router } from "express";
import { getAllAsync, getAsync, register } from "../controllers/estadoUsuario";

const estadoUsuarioRoute = Router();
estadoUsuarioRoute.post("/register", register);
estadoUsuarioRoute.get("/getAll", getAllAsync);
estadoUsuarioRoute.get("/:id", getAsync);

export default estadoUsuarioRoute;