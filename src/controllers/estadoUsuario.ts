import { Request, Response } from "express";
import { EstadoUsuario } from "../models/usuario";
// import { EstadoUsuario } from "../models/estadoUsuario";


export const register = async (req: Request, res: Response) => {
    const { descripcion } = req.body;

    EstadoUsuario.create({
        descripcion: descripcion,
        disponible: 1
    });

    res.json({
        msg: `EstadoUsuario.. create success...`
    });
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await EstadoUsuario.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {
    const { id } = req.params;

    const entity = await EstadoUsuario.findByPk(id);

    if (entity) {
        res.json(entity)
    } else {
        res.status(404).json({
            msg: `No existe con el id ${id}`
        })
    }
}