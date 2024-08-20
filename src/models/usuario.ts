import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Usuario = sequelize.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idTipoDocumento: { type: DataTypes.NUMBER, allowNull: false },
    numeroDocumento: { type: DataTypes.NUMBER, allowNull: false },
    idEstado: { type: DataTypes.NUMBER, allowNull: false },
    nombres: { type: DataTypes.STRING, allowNull: false },
    apellidos: { type: DataTypes.STRING, allowNull: false },
    direccion: { type: DataTypes.STRING, allowNull: true },
    telefono: { type: DataTypes.STRING, allowNull: true },
    disponible: { type: DataTypes.BIGINT, allowNull: false },
});