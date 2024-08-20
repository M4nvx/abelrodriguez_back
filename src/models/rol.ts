import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    disponible :  { type: DataTypes.INTEGER, allowNull: false },
});