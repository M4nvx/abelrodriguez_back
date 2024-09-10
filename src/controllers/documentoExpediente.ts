import { Request, Response } from "express";
import { DocumentoExpediente } from "../models/documentoExpediente";

export const register = async (req: Request, res: Response) => {
    const { idExpediente, nombre, disponible, fecha } = req.body;

    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded 2.1' });
    }

    try {
        DocumentoExpediente.create({
            idExpediente: idExpediente,
            nombre: req.file.filename,
            documentoPath: req.file.path,
            fecha: fecha,
            disponible: 1,
        });

        res.json({
            msg: `Documento.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getByIdExpedienteAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entities = await DocumentoExpediente.findAll({ where: { disponible: 1, idExpediente: id } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entity = await DocumentoExpediente.findByPk(id);

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
    const entity = await DocumentoExpediente.findByPk(id);

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
        const entity = await DocumentoExpediente.findByPk(id);
        if (entity) {

            body.nombre = req.file.filename;
            body.documentoPath = req.file.path;

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