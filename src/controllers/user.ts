import { Request, Response } from "express";
import bcrypt from 'bcrypt';
import { User } from "../models/user";

export const register = async (req: Request, res: Response) => {
    const { user, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    User.create({
        user : user,
        password : passwordHash
    });

    res.json({
        msg:`User ${user} create success...`
    });
}