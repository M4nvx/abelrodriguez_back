import { Request, Response } from "express";
import { Expediente } from "../models/expediente";

export const register = async (req: Request, res: Response) => {
    const { idUsuario, idEstadoExpediente, detalle, fecha } = req.body;

    try {

        Expediente.create({
            idUsuario: idUsuario,
            idEstadoExpediente: idEstadoExpediente,

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

    const { id } = req.params;

    const entities = await Expediente.findAll({ where: { disponible: 1, idUsuario: id } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entity = await Expediente.findByPk(id);

    if (entity) {
        res.json(entity)
    } else {
        res.status(404).json({
            msg: `No existe con el id ${id}`
        })
    }
}

export const deleteAsync = async (req: Request, res: Response) => {
    const { id } = req.params;
    const entity = await Expediente.findByPk(id);

    if (!entity) {
        res.status(404).json({
            msg: `No existe con el id ${id}`
        })
    } else {
        await entity.destroy();
        res.json({
            msg: 'Fue eliminado con exito!'
        })
    }
}

export const updateAsync = async (req: Request, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const entity = await Expediente.findByPk(id);
        if (entity) {

            await entity.update(body);
            res.json({
                msg: 'Fue actualziado con exito'
            })

        } else {
            res.status(404).json({
                msg: `No existe el id ${id}`
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error, comuniquese con soporte`
        })
    }
}