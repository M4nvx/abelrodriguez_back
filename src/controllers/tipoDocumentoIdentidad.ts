import { Request, Response } from "express";
import { TipoDocumentoIdentidad } from "../models/tipoDocumentoIdentidad";


export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    TipoDocumentoIdentidad.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `TipoDocumento.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await TipoDocumentoIdentidad.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await TipoDocumentoIdentidad.findOne({ where: { id: id } });

    res.json(entity);
}