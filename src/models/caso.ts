import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Caso = sequelize.define('Caso', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    numeroCaso: { type: DataTypes.STRING, allowNull: false },
    foto: { type: DataTypes.STRING, allowNull: false },
    imagePath:  { type: DataTypes.STRING, allowNull: false },
    titulo: { type: DataTypes.STRING, allowNull: false },
    detalle: { type: DataTypes.TEXT, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.INTEGER, allowNull: false },
});