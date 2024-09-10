import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const EstadoUsuario = sequelize.define('EstadoUsuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: { type: DataTypes.STRING, allowNull: false },
    disponible :  { type: DataTypes.INTEGER, allowNull: false },
});