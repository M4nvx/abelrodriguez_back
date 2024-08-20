import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { Auth } from "../models/auth";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
    const { usuario, password } = req.body;

    const userUnique = await Auth.findOne({ where: { usuario: usuario } });

    if (userUnique) {
        return res.status(400).json({
            msg: `Usuario ya existe`
        });
    }

    try {

        const passwordHash = await bcrypt.hash(password, 10);

        Auth.create({
            usuario: usuario,
            password: passwordHash,
            disponible: 1
        });

        res.json({
            msg: `User ${usuario} create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario con el dni ${usuario}`
        });
    }
}

export const login = async (req: Request, res: Response) => {

    const { usuario, password } = req.body;

    const entity: any = await Auth.findOne({ where: { usuario: usuario } });
    if (!entity) {
        return res.status(400).json({
            msg: `Usuario no existe`
        });
    }

    const passwordValid = await bcrypt.compare(password, entity.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password incorrecto`
        });
    }

    const token = jwt.sign({ usuario: usuario }, process.env.ACCESS_TOKEN || 'JkC1535787157188714TK', { expiresIn: '1h' });

    res.json({ token });
}