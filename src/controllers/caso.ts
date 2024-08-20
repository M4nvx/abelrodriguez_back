import { Request, Response } from "express";
import { Caso } from "../models/caso";

export const register = async (req: Request, res: Response) => {
    const { numeroCaso, foto, titulo, detalle, fecha } = req.body;

    try {
        Caso.create({
            numeroCaso: numeroCaso,
            foto: foto,
            titulo: titulo,
            detalle: detalle,
            fecha: fecha,
            diponible: 1,
        });

        res.json({
            msg: `Caso.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Caso.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Caso.findOne({ where: { id: id } });

    res.json(entity);
}