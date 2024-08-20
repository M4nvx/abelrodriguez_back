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
    titulo: { type: DataTypes.NUMBER, allowNull: false },
    detalle: { type: DataTypes.NUMBER, allowNull: false },
    fecha: { type: DataTypes.DATE, allowNull: false },
    disponible: { type: DataTypes.BIGINT, allowNull: false },
});