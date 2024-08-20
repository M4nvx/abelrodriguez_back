import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Expediente = sequelize.define('Expediente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUsuario: { type: DataTypes.NUMBER, allowNull: false },
    idEstadoExpediente: { type: DataTypes.STRING, allowNull: false },
    detalle: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.BIGINT, allowNull: false },
});