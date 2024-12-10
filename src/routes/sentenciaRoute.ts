import { Router } from "express";
import { deleteAsync, getAllAsync, getAsync, register, updateAsync } from "../controllers/sentencia";
import multer from 'multer';
import path from 'path'
import validateToken from "../utils/validateToken";

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.SENTENCIA_FILE_PATH  || 'media/sentencias',
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });
const sentenciaRoute = Router();
sentenciaRoute.post("/register", validateToken, upload.fields([{
    name: 'image', maxCount: 1
  }, {
    name: 'document', maxCount: 1
  }]) , register);
sentenciaRoute.get("/getAll", getAllAsync);
sentenciaRoute.get("/:id",  getAsync);
sentenciaRoute.delete('/:id', validateToken, deleteAsync);
sentenciaRoute.put('/:id', validateToken, upload.fields([{
  name: 'image', maxCount: 1
}, {
  name: 'document', maxCount: 1
}]) ,  updateAsync);

export default sentenciaRoute;