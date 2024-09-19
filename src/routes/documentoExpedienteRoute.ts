import { Router } from "express";
import multer from 'multer';
import path from 'path'
import { deleteAsync, getAsync, getByIdExpedienteAsync, register, updateAsync } from "../controllers/documentoExpediente";

// Create a Multer instance with a destination folder for file uploads
const storage = multer.diskStorage({
    destination: process.env.EXPEDIENTE_FILE_PATH  || 'C:\\temp\\fakepath\\ExpedienteDocumento' ,
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
});

const upload = multer({ storage });
const documentoExpedienteRoute = Router();

documentoExpedienteRoute.post("/register", upload.single('documento'), register);
documentoExpedienteRoute.get("/expediente/:id", getByIdExpedienteAsync);
documentoExpedienteRoute.get("/:id", getAsync);
documentoExpedienteRoute.delete('/:id', deleteAsync);
documentoExpedienteRoute.put('/:id', upload.single('documento'), updateAsync);

export default documentoExpedienteRoute;