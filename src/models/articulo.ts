import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Articulo = sequelize.define('Articulo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    foto: { type: DataTypes.STRING, allowNull: false },
    imagePath:  { type: DataTypes.STRING, allowNull: false },
    documentPath:  { type: DataTypes.STRING, allowNull: true },
    titulo: { type: DataTypes.STRING, allowNull: false },
    detalle: { type: DataTypes.STRING, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});