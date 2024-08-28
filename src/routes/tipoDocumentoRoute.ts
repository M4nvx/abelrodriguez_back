import { Router } from "express";
import { getAllAsync, getByIdAsync, register } from "../controllers/tipoDocumento";

const tipoDocumentoRoute = Router();
tipoDocumentoRoute.post("/api/tipodocumento/register", register);
tipoDocumentoRoute.get("/api/tipodocumento/getAll", getAllAsync);
tipoDocumentoRoute.get("/api/tipodocumento/getById", getByIdAsync);

export default tipoDocumentoRoute;