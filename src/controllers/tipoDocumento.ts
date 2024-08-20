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