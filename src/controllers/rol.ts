import { Request, Response } from "express";
import { Rol } from "../models/rol";

export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    Rol.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `Rol.. create success...`
    });
}