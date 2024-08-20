import { Request, Response } from "express";
import { Sentencia } from "../models/sentencia";

export const register = async (req: Request, res: Response) => {
    const { titulo, foto, descripcion, detalle, fecha, enlace } = req.body;

    try {
        Sentencia.create({
            titulo: titulo,
            foto: foto,
            descripcion: descripcion,
            detalle:detalle,
            fecha: fecha,
            enlace: enlace,
            diponible: 1,
        });

        res.json({
            msg: `Sentencia.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}