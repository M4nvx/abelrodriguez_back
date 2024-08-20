import { Router } from "express";
import { register } from "../controllers/rol";

const rolRoute = Router();
rolRoute.post("/api/rol/register", register);

export default rolRoute;