import { Router } from "express";
import { getAllAsync, getAsync, register } from "../controllers/tipoDocumentoIdentidad";

const tipoDocumentoIdentidadRoute = Router();
tipoDocumentoIdentidadRoute.post("/register", register);
tipoDocumentoIdentidadRoute.get("/getAll", getAllAsync);
tipoDocumentoIdentidadRoute.get("/:id", getAsync);

export default tipoDocumentoIdentidadRoute;