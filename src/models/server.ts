import express, { Application } from 'express';
import cors from 'cors';

import articuloRoute from '../routes/articuloRoute';
import authRoute from '../routes/authRoute';
import casoRoute from '../routes/casoRoute';
import resolucionRoute from '../routes/resolucionRoute';
import sentenciaRoute from '../routes/sentenciaRoute';
import usuarioRoute from '../routes/usuarioRoute';
import documentoExpedienteRoute from '../routes/documentoExpedienteRoute';
import estadoExpedienteRoute from '../routes/estadoExpedienteRoute';
import expedienteRoute from '../routes/expedienteRoute';
import rolRoute from '../routes/rolRoute';
import tipoDocumentoRoute from '../routes/tipoDocumentoRoute';
import tipoDocumentoIdentidadRoute from '../routes/tipoDocumentoIdentidadRoute';
import estadoUsuarioRoute from '../routes/estadoUsuarioRoute';
import tipoSentenciaRoute from '../routes/tipoSentenciaRoute';

import { EstadoUsuario, Usuario } from './usuario';
import { Resolucion } from './resolucion';
import { Auth } from './auth';
import { Sentencia } from './sentencia';
import { Caso } from './caso';
import { DocumentoExpediente } from './documentoExpediente';
import { EstadoExpediente } from './estadoExpediente';
import { Expediente } from './expediente';
import { Rol } from './rol';
import { TipoDocumento } from './tipoDocumento';
import { TipoDocumentoIdentidad } from './tipoDocumentoIdentidad';
import { Articulo } from './articulo';
import { TipoSentencia } from './tipoSentencia';

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
        this.app.use('/api/articulo', articuloRoute);
        this.app.use('/api/auth', authRoute);
        this.app.use('/api/caso', casoRoute);
        this.app.use('/api/expedienteDocumento', documentoExpedienteRoute);
        this.app.use('/api/estadoExpediente', estadoExpedienteRoute);
        this.app.use('/api/expediente', expedienteRoute);
        this.app.use('/api/resolucion', resolucionRoute);
        this.app.use('/api/rol', rolRoute);
        this.app.use('/api/sentencia', sentenciaRoute);
        this.app.use('/api/tipoDocumento', tipoDocumentoRoute);
        this.app.use('/api/tipoDocumentoIdentidad', tipoDocumentoIdentidadRoute);
        this.app.use('/api/tipoSentencia', tipoSentenciaRoute);
        this.app.use('/api/usuario', usuarioRoute);
        this.app.use('/api/estadoUsuario', estadoUsuarioRoute);
    }

    midlewares() {
        this.app.use(express.json());

        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            // await sequelize.authenticate(){ force: true };
            await Articulo.sync({ force: true });
            await Auth.sync();
            await Caso.sync({ force: true });
            await DocumentoExpediente.sync();
            await EstadoExpediente.sync();
            await Expediente.sync({ force: true });
            await Resolucion.sync({ force: true });
            await Rol.sync();
            await Sentencia.sync({ force: true });
            await TipoDocumento.sync();
            await TipoDocumentoIdentidad.sync();
            await TipoSentencia.sync();
            await EstadoUsuario.sync();
            await Usuario.sync();

            console.log("Contexión Exitosa");
        } catch (err) {
            console.log("Error de conexión", err);
        }
    }
}

export default Server;