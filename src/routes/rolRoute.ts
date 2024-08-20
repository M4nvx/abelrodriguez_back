import { Router } from "express";
import { getAllAsync, getByIdAsync, register } from "../controllers/rol";

const rolRoute = Router();
rolRoute.post("/api/rol/register", register);
rolRoute.get("/api/rol/getAll", getAllAsync);
rolRoute.get("/api/rol/getById", getByIdAsync);

export default rolRoute;