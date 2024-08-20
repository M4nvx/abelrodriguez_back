import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { Auth } from "../models/auth";

export const register = async (req: Request, res: Response) => {
    const { user, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    try {
        Auth.create({
            user: user,
            password: passwordHash
        });

        res.json({
            msg: `User ${user} create success...`
        });
    }
    catch (err) {
        res.status(400).json({
            msg: `Existe un error al crear el usuario con el dni ${user}`
        });
    }
}

export const login = async (req: Request, res: Response) => {
    res.json({
        msg: `INICIO DE SESION EXITOSO`,
        body: req.body
    });
}