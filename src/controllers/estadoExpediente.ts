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