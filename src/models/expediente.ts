import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Expediente = sequelize.define('Expediente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: { type: DataTypes.INTEGER, allowNull: false },
    idEstadoExpediente: { type: DataTypes.INTEGER, allowNull: false },
    detalle: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});