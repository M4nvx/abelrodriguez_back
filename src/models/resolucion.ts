import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Resolucion = sequelize.define('Resolucion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo:  { type: DataTypes.STRING, allowNull: false },
    foto:  { type: DataTypes.STRING, allowNull: true },
    imagePath:  { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    detalle: { type: DataTypes.TEXT, allowNull: false },
    enlace: { type: DataTypes.STRING, allowNull: true },
    disponible :  { type: DataTypes.INTEGER, allowNull: false },
});