import { Request, Response } from "express";
import { Expediente } from "../models/expediente";

export const register = async (req: Request, res: Response) => {
    const { idUsuario, idEstadoExpediente, detalle,  fecha } = req.body;

    try {
        Expediente.create({
            idUsuario: idUsuario,
            idEstadoExpediente:idEstadoExpediente,
            detalle: detalle,
            fecha: fecha,
            disponible: 1,
        });

        res.json({
            msg: `Expediente.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getByIdUsuarioAsync = async (req: Request, res: Response) => {

    const { idUsuario } = req.body;

    const entities = await Expediente.findAll({ where: { disponible: 1, idUsuario : idUsuario } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Expediente.findOne({ where: { id: id } });

    res.json(entity);
}