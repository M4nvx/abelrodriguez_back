import { Request, Response } from "express";
import { Usuario } from "../models/usuario";

export const register = async (req: Request, res: Response) => {
    const { idTipoDocumento, numeroDocumento, nombres, apellidos, direccion, telefono } = req.body;

    try {
        Usuario.create({
            idTipoDocumento: idTipoDocumento,
            numeroDocumento: numeroDocumento,
            idEstado: 1,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            disponible: 1
        });

        res.json({
            msg: `Usuario.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Usuario.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getByIdAsync = async (req: Request, res: Response) => {

    const { id } = req.body;

    const entity = await Usuario.findOne({ where: { id: id } });

    res.json(entity);
}