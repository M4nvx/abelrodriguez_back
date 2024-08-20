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

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Resolucion.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Resolucion.findOne({ where: { id: id } });

    res.json(entity);
}