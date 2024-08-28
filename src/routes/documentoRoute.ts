import { Router } from "express";
import { getByIdAsync, getByIdExpedienteAsync, register } from "../controllers/documento";

const documentoRoute = Router();
documentoRoute.post("/api/documento/register", register);
documentoRoute.get("/api/documento/getByIdExpediente", getByIdExpedienteAsync);
documentoRoute.get("/api/documento/getById", getByIdAsync);

export default documentoRoute;