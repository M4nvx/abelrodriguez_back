import express, { Application } from 'express';
import cors from 'cors';

import authRoute from '../routes/authRoute';
import casoRoute from '../routes/casoRoute';
import resolucionRoute from '../routes/resolucionRoute';
import sentenciaRoute from '../routes/sentenciaRoute';
import usuarioRoute from '../routes/usuarioRoute';
import documentoRoute from '../routes/documentoRoute';
import estadoExpedienteRoute from '../routes/estadoExpedienteRoute';
import expedienteRoute from '../routes/expedienteRoute';
import rolRoute from '../routes/rolRoute';
import tipoDocumentoRoute from '../routes/tipoDocumentoRoute';

import { Usuario } from './usuario';
import { Resolucion } from './resolucion';
import { Auth } from './auth';
import { Sentencia } from './sentencia';
import { Caso } from './caso';
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
        this.port = process.env.PORT || '3010';
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
        this.app.use('/api/caso', casoRoute);
        this.app.use('/api/documento',documentoRoute);
        this.app.use('/api/estado',estadoExpedienteRoute);
        this.app.use('/api/expediente',expedienteRoute);
        this.app.use('/api/resolucion',resolucionRoute);
        this.app.use('/api/rol',rolRoute);
        this.app.use('/api/sentencia',sentenciaRoute);
        this.app.use('/api/tipoDocumento',tipoDocumentoRoute);
        this.app.use('/api/usuario',usuarioRoute);
    }

    midlewares() {
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            // await sequelize.authenticate(){ force: true };
            await Auth.sync();
            await Caso.sync();
            await Documento.sync({ force: true });
            await EstadoExpediente.sync({ force: true });
            await Expediente.sync({ force: true });
            await Resolucion.sync({ force: true });
            await Rol.sync();
            await Sentencia.sync({ force: true });
            await TipoDocumento.sync();
            await Usuario.sync();

            console.log("Contexión Exitosa");
        } catch (err) {
            console.log("Error de conexión", err);
        }
    }
}

export default Server;