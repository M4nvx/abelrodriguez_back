import { Request, Response } from "express";
import { Resolucion } from "../models/resolucion";

export const register = async (req: Request, res: Response) => {
    const { titulo, foto, descripcion, detalle, enlace } = req.body;

    Resolucion.create({
        titulo: titulo,
        foto: foto,
        descripcion: descripcion,
        detalle: detalle,
        enlace: enlace,
        disponible: 1
    });

    res.json({
        msg: `Resolucion ${descripcion} create success...`
    });
}