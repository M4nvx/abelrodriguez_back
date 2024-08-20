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
            diponible: 1,
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