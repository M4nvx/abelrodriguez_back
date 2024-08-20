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

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Rol.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Rol.findOne({ where: { id: id } });

    res.json(entity);
}