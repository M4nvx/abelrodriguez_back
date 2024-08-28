import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTipoDocumento: { type: DataTypes.INTEGER, allowNull: false },
    numeroDocumento: { type: DataTypes.INTEGER, allowNull: false },
    idEstado: { type: DataTypes.INTEGER, allowNull: false },
    nombres: { type: DataTypes.STRING, allowNull: false },
    apellidos: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: true },
    telefono: { type: DataTypes.STRING, allowNull: true },
    observacion: { type: DataTypes.STRING, allowNull: false },
    fechaNacimiento: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});