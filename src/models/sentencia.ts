import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Sentencia = sequelize.define('Sentencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: { type: DataTypes.STRING, allowNull: false },
    foto: { type: DataTypes.STRING, allowNull: true },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    detalle: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    enlace: { type: DataTypes.STRING, allowNull: true },
    diponible: { type: DataTypes.INTEGER, allowNull: false },
});