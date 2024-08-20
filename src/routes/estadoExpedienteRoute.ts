import { Router } from "express";
import { register } from "../controllers/estadoExpediente";

const estadoExpedienteRoute = Router();
estadoExpedienteRoute.post("/api/estado/register", register);

export default estadoExpedienteRoute;