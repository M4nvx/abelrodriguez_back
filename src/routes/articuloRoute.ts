import { Router } from "express";
import validateToken from "../utils/validateToken";
import multer from 'multer';
import path from 'path'
import { register, updateAsync, deleteAsync, getAllAsync, getAsync } from "../controllers/articulo";

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.ARTICULO_FILE_PATH || 'media/articulos',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

console.log("********************************************************************************This access ARTICULO_FILE_PATH is: " + process.env.ARTICULO_FILE_PATH);

const upload = multer({ storage });
const articuloRoute = Router();

articuloRoute.post("/register", validateToken, upload.fields([{
    name: 'image', maxCount: 1
  }, {
    name: 'document', maxCount: 1
  }]) , register);
articuloRoute.get("/getAll", getAllAsync);
articuloRoute.get("/:id", validateToken, getAsync);
articuloRoute.delete('/:id', validateToken, deleteAsync);
articuloRoute.put('/:id', validateToken, upload.array('image'), updateAsync);

export default articuloRoute;