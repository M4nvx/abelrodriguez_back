import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
// https://www.youtube.com/watch?v=XXMczd98pTYk
const validateToken = (req: Request, res: Response, next: NextFunction) => {
    const headersToken = req.headers['authorization']

    if (headersToken != undefined && headersToken.startsWith('Bearer ')) {
        try {
            const token = headersToken.slice(7);

            jwt.verify(token, process.env.ACCESS_TOKEN || 'JkC1535787157188714TK');

            console.log("********************************************************************************This access token is: " + process.env.ACCESS_TOKEN);

            next();
        } catch (err) {
            res.status(401).json({ msg: `Token Invalida` });
        }
    } else {
        res.status(401).json({ msg: `Acceso denegado` });
    }
}

export default validateToken