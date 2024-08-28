import { Router } from "express";
import { getAllAsync, getByIdAsync, register } from "../controllers/estadoExpediente";

const estadoExpedienteRoute = Router();
estadoExpedienteRoute.post("/api/estado/register", register);
estadoExpedienteRoute.get("/api/estado/getAll", getAllAsync);
estadoExpedienteRoute.get("/api/estado/getById", getByIdAsync);

export default estadoExpedienteRoute;