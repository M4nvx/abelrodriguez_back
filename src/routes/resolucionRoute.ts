import { Router } from "express";
import { deleteAsync, getAllAsync, getAsync, register, updateAsync } from "../controllers/resolucion";
import multer from 'multer';
import path from 'path'

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.RESOLUCION_FILE_PATH,
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });
const resolucionRoute = Router();

resolucionRoute.post("/register", upload.single('image'), register);
resolucionRoute.get("/getAll", getAllAsync);
resolucionRoute.get("/:id", getAsync);
resolucionRoute.delete('/:id', deleteAsync);
resolucionRoute.put('/:id', upload.single('image'), updateAsync);

export default resolucionRoute;