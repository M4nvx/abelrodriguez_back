import { Router } from "express";
import { getAllAsync, getAsync, register } from "../controllers/estadoExpediente";

const estadoExpedienteRoute = Router();
estadoExpedienteRoute.post("/register", register);
estadoExpedienteRoute.get("/getAll", getAllAsync);
estadoExpedienteRoute.get("/:id", getAsync);

export default estadoExpedienteRoute;