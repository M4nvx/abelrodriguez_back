import express, { Application } from 'express';
import sequelize from '../database/connection';

class Server {

    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("This execute from port: " + this.port);
        });
    }

    async dbConnect() {
        try {
            await sequelize.authenticate();
            console.log("Contexión Exitosa");
        } catch (err) {
            console.log("Error de conexión", err);
        }
    }
}

export default Server;