import { Request, Response } from "express";
import { Documento } from "../models/documento";

export const register = async (req: Request, res: Response) => {
    const { idExpediente, nombre, disponible, fecha } = req.body;

    try {
        Documento.create({
            idExpediente: idExpediente,
            nombre: nombre,
            fecha: fecha,
            disponible: 1,
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

export const getByIdExpedienteAsync = async (req: Request, res: Response) => {

    const { idExpediente } = req.body;

    const entities = await Documento.findAll({ where: { disponible: 1, idExpediente: idExpediente } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Documento.findOne({ where: { id: id } });

    res.json(entity);
}