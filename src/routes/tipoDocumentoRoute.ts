import { Router } from "express";
import { register } from "../controllers/tipoDocumento";

const tipoDocumentoRoute = Router();
tipoDocumentoRoute.post("/api/tipodocumento/register", register);

export default tipoDocumentoRoute;