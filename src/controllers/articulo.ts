import { Request, Response } from "express";
import { Articulo } from "../models/articulo";


export const register = async (req: any, res: Response) => {
    const { foto, titulo, detalle, fecha } = req.body;

    if (!req.files) {
        return res.status(400).json({ error: 'No file uploaded 2.1' });
    }

    const documentFile = req.files.document[0];
    const imageGraphic = req.files.image[0];

    try {
        Articulo.create({
            foto: imageGraphic.filename,
            imagePath: imageGraphic.path,
            documento: documentFile.filename,
            documentPath: documentFile.path,
            titulo: titulo,
            detalle: detalle,
            fecha: fecha,
            disponible: 1,
        });

        res.json({
            msg: `Articulo.. create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al entidad`
        });
    }
}

export const getAllAsync = async (req: Request, res: Response) => {

    const entities = await Articulo.findAll({ where: { disponible: 1 } });

    res.json(entities);
}

export const getAsync = async (req: Request, res: Response) => {

    const { id } = req.params;

    const entity = await Articulo.findByPk(id);

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
    const entity = await Articulo.findByPk(id);

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

    // if (!req.file) {
    //     return res.status(400).json({ error: 'No file uploaded 2.1' });
    // }

    try {
        const entity = await Articulo.findByPk(id);
        if (entity) {

            // body.foto = req.file.filename;
            // body.imagePath = req.file.path;

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