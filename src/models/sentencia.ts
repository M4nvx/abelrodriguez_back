import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Sentencia = sequelize.define('Sentencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: { type: DataTypes.STRING, allowNull: false },
    idTipo: { type: DataTypes.INTEGER, allowNull: false },
    foto: { type: DataTypes.STRING, allowNull: true },
    imagePath:  { type: DataTypes.STRING, allowNull: false },
    documento:  { type: DataTypes.STRING, allowNull: true },
    documentPath:  { type: DataTypes.STRING, allowNull: true },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    detalle: { type: DataTypes.TEXT, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    enlace: { type: DataTypes.STRING, allowNull: true },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});