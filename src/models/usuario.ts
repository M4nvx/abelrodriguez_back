import { DataTypes, } from "sequelize";
import sequelize from "../database/connection";

export const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTipoDocumento: { type: DataTypes.INTEGER, allowNull: false },
    numeroDocumento: { type: DataTypes.INTEGER, allowNull: false },
    idEstado: {
        type: DataTypes.INTEGER, allowNull: false,
        references: {model: "EstadoUsuario", key: "id"}
    },
    nombres: { type: DataTypes.STRING, allowNull: false,  },
    apellidos: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: true },
    telefono: { type: DataTypes.STRING, allowNull: true },
    observacion: { type: DataTypes.STRING, allowNull: false },
    fechaNacimiento: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});

export const EstadoUsuario = sequelize.define('EstadoUsuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    disponible :  { type: DataTypes.INTEGER, allowNull: false },
});

Usuario.hasMany(EstadoUsuario); // Set one to many relationship