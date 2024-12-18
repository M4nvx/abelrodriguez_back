import { Request, Response } from "express";
import { EstadoExpediente } from "../models/estadoExpediente";

export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    EstadoExpediente.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `EstadoExpediente.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await EstadoExpediente.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {
    const { id } = req.params;

    const entity = await EstadoExpediente.findByPk(id);

    if (entity) {
        res.json(entity)
    } else {
        res.status(404).json({
            msg: `No existe con el id ${id}`
        })
    }
}