import { Request, Response } from "express";
import { Documento } from "../models/documento";

export const register = async (req: Request, res: Response) => {
    const { idExpediente, nombre, disponible, fecha } = req.body;

    try {
        Documento.create({
            idExpediente: idExpediente,
            nombre: nombre,
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