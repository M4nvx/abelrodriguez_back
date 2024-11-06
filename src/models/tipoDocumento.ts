import { DataTypes } from "sequelize";
import sequelize from "../database/connection";

export const TipoDocumento = sequelize.define('TipoDocumento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: { type: DataTypes.TEXT, allowNull: false },
    disponible :  { type: DataTypes.INTEGER, allowNull: false },
});