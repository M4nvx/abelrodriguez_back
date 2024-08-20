import { Router } from "express";
import { register } from "../controllers/caso";
import { getAllAsync } from "../controllers/caso";
import validateToken from "../utils/validateToken";

const casoRoute = Router();
casoRoute.post("/api/caso/register", register);
// casoRoute.get("/api/caso/getAll", validateToken, getAllAsync);
casoRoute.get("/api/caso/getAll", getAllAsync);

export default casoRoute;