import { Request, Response } from "express";
import { TipoDocumento } from "../models/tipoDocumento";

export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    TipoDocumento.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `TipoDocumento.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await TipoDocumento.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await TipoDocumento.findOne({ where: { id: id } });

    res.json(entity);
}