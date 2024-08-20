import { DataTypes, NUMBER } from "sequelize";
import sequelize from "../database/connection";

export const Auth = sequelize.define('Auth', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuario: { type: DataTypes.STRING, unique: true, allowNull: false },
    contrasenya: { type: DataTypes.STRING, allowNull: false },
    idUsuario: { type: DataTypes.NUMBER, allowNull: false },
    disponible: { type: DataTypes.BIGINT, allowNull: false },
});