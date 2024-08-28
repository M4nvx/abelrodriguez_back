import { Router } from "express";
import { getAllAsync, getAsync, register } from "../controllers/tipoDocumento";

const tipoDocumentoRoute = Router();
tipoDocumentoRoute.post("/register", register);
tipoDocumentoRoute.get("/getAll", getAllAsync);
tipoDocumentoRoute.get("/:id", getAsync);

export default tipoDocumentoRoute;