import express, { Application } from 'express';
import sequelize from '../database/connection';
import authRoute from '../routes/authRoute';
import casoRoute from '../routes/casoRoute';
import resolucionRoute from '../routes/resolucionRoute';
import sentenciaRoute from '../routes/sentenciaRoute';
import usuarioRoute from '../routes/usuarioRoute';

import { Usuario } from './usuario';
import { Resolucion } from './resolucion';
import { Auth } from './auth';
import { Sentencia } from './sentencia';
import { Caso } from './caso';
import documentoRoute from '../routes/documentoRoute';
import estadoExpedienteRoute from '../routes/estadoExpedienteRoute';
import expedienteRoute from '../routes/expedienteRoute';
import rolRoute from '../routes/rolRoute';
import tipoDocumentoRoute from '../routes/tipoDocumentoRoute';
import { Documento } from './documento';
import { EstadoExpediente } from './estadoExpediente';
import { Expediente } from './expediente';
import { Rol } from './rol';
import { TipoDocumento } from './tipoDocumento';

class Server {

    private app: Application;
    private port: string | undefined;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3017';
        this.listen();
        this.midlewares();
        this.router();
        this.dbConnect();
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("This execute from port: " + this.port);
        });
    }

    router() {
        this.app.use(authRoute);
        this.app.use(casoRoute);
        this.app.use(documentoRoute);
        this.app.use(estadoExpedienteRoute);
        this.app.use(expedienteRoute);
        this.app.use(resolucionRoute);
        this.app.use(rolRoute);
        this.app.use(sentenciaRoute);
        this.app.use(tipoDocumentoRoute);
        this.app.use(usuarioRoute);
    }

    midlewares() {
        this.app.use(express.json());
    }

    async dbConnect() {
        try {
            // await sequelize.authenticate();
            await Auth.sync({ force: true });
            await Caso.sync({ force: true });
            await Documento.sync();
            await EstadoExpediente.sync();
            await Expediente.sync();
            await Resolucion.sync({ force: true });
            await Rol.sync();
            await Sentencia.sync({ force: true });
            await TipoDocumento.sync();
            await Usuario.sync({ force: true });

            console.log("Contexión Exitosa");
        } catch (err) {
            console.log("Error de conexión", err);
        }
    }
}

export default Server;