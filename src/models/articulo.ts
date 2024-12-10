import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Articulo = sequelize.define('Articulo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    foto: { type: DataTypes.STRING, allowNull: false },
    imagePath:  { type: DataTypes.STRING, allowNull: false },
    documento:  { type: DataTypes.STRING, allowNull: true },
    documentPath:  { type: DataTypes.STRING, allowNull: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    detalle: { type: DataTypes.TEXT, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});