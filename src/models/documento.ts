import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Documento = sequelize.define('Documento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idExpediente: { type: DataTypes.NUMBER, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.BIGINT, allowNull: false },
});0