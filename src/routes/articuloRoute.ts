import { Router } from "express";
import validateToken from "../utils/validateToken";
import multer from 'multer';
import path from 'path'
import { register, updateAsync, deleteAsync, getAllAsync, getAsync  } from "../controllers/articulo";

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.ARTICULO_FILE_PATH || 'C:\\temp\\fakepath\\Articulo',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });
const articuloRoute = Router();

articuloRoute.post("/register", upload.single('image'), register);
articuloRoute.get("/getAll", getAllAsync);
articuloRoute.get("/:id", getAsync);
articuloRoute.delete('/:id', deleteAsync);
articuloRoute.put('/:id', upload.single('image'), updateAsync);

export default articuloRoute;