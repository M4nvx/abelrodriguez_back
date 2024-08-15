import { Sequelize } from "sequelize";

const sequelize = new Sequelize('process.env.DB_NAME', 'process.env.DB_USERNAME', 'process.env.DB_PASSWORD', {
    host : process.env.DB_HOST,
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