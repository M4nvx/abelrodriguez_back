import { Request, Response } from "express";
import { Sentencia } from "../models/sentencia";

export const register = async (req: Request, res: Response) => {
    const { titulo, foto, descripcion, detalle, fecha, enlace } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded 2.1' });
    }

    try {
        Sentencia.create({
            titulo: titulo,
            foto: req.file.filename,
            imagePath : req.file.path,
            descripcion: descripcion,
            detalle:detalle,
            fecha: fecha,
            enlace: enlace,
            disponible: 1,
        });

        res.json({
            msg: `Sentencia.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Sentencia.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entity = await Sentencia.findByPk(id);

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
    const entity = await Sentencia.findByPk(id);

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
        const entity = await Sentencia.findByPk(id);
        if (entity) {

            body.foto = req.file.filename;
            body.imagePath = req.file.path;

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