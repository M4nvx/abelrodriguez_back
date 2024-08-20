import { Request, Response } from "express";
import { EstadoExpediente } from "../models/estadoExpediente";

export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    EstadoExpediente.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `Rol.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await EstadoExpediente.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await EstadoExpediente.findOne({ where: { id: id } });

    res.json(entity);
}