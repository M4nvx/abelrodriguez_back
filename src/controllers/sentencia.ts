import { Request, Response } from "express";
import { Sentencia } from "../models/sentencia";

export const register = async (req: any, res: Response) => {
    const { titulo, idTipo, foto, descripcion, detalle, fecha, enlace } = req.body;

    if (!req.files) {
        return res.status(400).json({ error: 'No file uploaded 2.1' });
    }

    const documentFile = req.files.document[0];
    const imageGraphic = req.files.image[0];

    try {
        Sentencia.create({
            titulo: titulo,
            idTipo : idTipo,
            foto: imageGraphic.filename,
            imagePath: imageGraphic.path,
            documento: documentFile.filename,
            documentPath: documentFile.path,
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

    const entities = await Sentencia.findAll({ where: { disponible: 1 }, order: [ ['id', 'DESC']] });

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

export const updateAsync = async (req: any, res: Response) => {
    const { body } = req;
    const { id } = req.params;

    try {
        const entity = await Sentencia.findByPk(id);
        if (entity) {

            if (req.files) {

                if (req.files.document) {
                    const documentFile = req.files.document[0];
                    body.documento = documentFile.filename;
                    body.documentPath = documentFile.path;
                }

                if (req.files.image) {
                    const imageGraphic = req.files.image[0];

                    body.foto = imageGraphic.filename;
                    body.imagePath = imageGraphic.path;
                }
            }

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