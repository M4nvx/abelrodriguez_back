import { Router } from "express";
import { getAllAsync, getAsync, register } from "../controllers/tipoSentencia";

const tipoSentenciaRoute = Router();
tipoSentenciaRoute.post("/register", register);
tipoSentenciaRoute.get("/getAll", getAllAsync);
tipoSentenciaRoute.get("/:id", getAsync);

export default tipoSentenciaRoute;