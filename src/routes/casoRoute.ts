import { Router } from "express";
import { deleteAsync, getAsync, register, updateAsync } from "../controllers/caso";
import { getAllAsync } from "../controllers/caso";
import validateToken from "../utils/validateToken";
import multer from 'multer';
import path from 'path'

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.CASO_FILE_PATH  || 'media/casos',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });
const casoRoute = Router();

casoRoute.post("/register", validateToken, upload.single('image'), register);
casoRoute.get("/getAll", getAllAsync);
casoRoute.get("/:id", validateToken, getAsync);
casoRoute.delete('/:id', validateToken, deleteAsync);
casoRoute.put('/:id', validateToken, upload.single('image'), updateAsync);

export default casoRoute;