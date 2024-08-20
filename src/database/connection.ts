import { Sequelize } from "sequelize";

const sequelize = new Sequelize('abelrodriguez_web_db', 'abelrodriguez', 'Firefox@2000', {
    host : 'https://abelrodriguez.pe:2083/',
    dialect : 'mysql'
});

export default sequelize

// const mysql = require('mysql');
// require('dotenv').config();

// var connection = mysql.createConnection({
//     port: process.env.DB_PORT,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// connection.connect((err) => {
//     if (err) {
//         console.log('Dont connected', err);
//     } else {
//         console.log('Connected');
//     }
// });

// module.exports = connection;