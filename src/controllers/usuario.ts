import { Request, Response } from "express";
import { EstadoUsuario, Usuario } from "../models/usuario";

export const register = async (req: Request, res: Response) => {
    const { idTipoDocumento, idEstadoUsuario, numeroDocumento, nombres, apellidos, direccion, telefono, observacion, fechaNacimiento } = req.body;

    try {
        Usuario.create({
            idTipoDocumento: idTipoDocumento,
            numeroDocumento: numeroDocumento,
            idEstado: idEstadoUsuario,
            nombres: nombres,
            apellidos: apellidos,
            direccion: direccion,
            telefono: telefono,
            observacion: observacion,
            fechaNacimiento: fechaNacimiento,
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

    const entities = await Usuario.findAll({
        where: { disponible: 1 },
        //include: [{ model: EstadoUsuario }]
    });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entity = await Usuario.findByPk(id);

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
    const entity = await Usuario.findByPk(id);

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

    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded 2.1' });
    }

    try {
        const entity = await Usuario.findByPk(id);
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