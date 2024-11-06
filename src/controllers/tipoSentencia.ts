import { Request, Response } from "express";
import { TipoSentencia } from "../models/tipoSentencia";


export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    TipoSentencia.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `TipoSentencia.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await TipoSentencia.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await TipoSentencia.findOne({ where: { id: id } });

    res.json(entity);
}