// const express = require('express');
// // const connected = require('../connected');
// // const { query } = require('../connection');
//  const connection = require('../../connection');
//  const router = express.Router();
// // const app = express();

// const jwt = require('jsonwebtoken');
// const nodemailer = require('nodemailer');

// require('dotenv').config();

// router.post('/signup', (req, res) => {
//     let user = req.body;
//     query = 'SELECT * FROM Login WHERE Usuario = ? AND Disponible = 1;';
//     connection.query(query, [user.usuario], [user.password], (err, results) => {
//         if (err) {
//             return res.status(500).json(err);
//         }

//         if (results.length <= 0) {
//             query = 'INSERT INTO Login(`Usuario`, `Contrasenya`, `Disponible`, `IdUsuario`, `IdRol`, `IdUsuarioInsert`, `FechaInsert`) VALUES (?,?,1,?,1,?,?)';
//             connection.query(query, [user.usuario], [user.password], [user.idusuario], [user.idrol], [user.idusuarioinsert], [user.fechainsert], (err, results) => {
//                 if (err) {
//                     return res.status(500).json(err);
//                 }
//                 return res.status(200).json({ message: "Successfully reagistered." });
//             });
//         } else {
//             return res.status(400).json({ message: "usuario ya esta activado" });
//         }
//     });
// });

// router.post('/login', (req, res) => {
//     const user = req.body;
//     query = "SELECT * FROM Login WHERE Usuario = ?";
//     connection.query(query, [user.usuario], [user.password], (err, results) => {
//         if (err) {
//             return res.status(500).json(err);
//         }

//         if (results.length <= 0 || results[0].password != user.password) {
//             return res.status(401).json({ message: "Incorrect username or password" });
//         }
//         else if (results[0].status === "false") {
//             return res.status(401).json({ message: "Wait for admin approval" });
//         }
//         else if (results[0].password == user.password) {
//             const response = { email: results[0].usuario, role: results[0].role };
//             const accessToken = jwt.sign(response, process.env.ACCESS_TOKEN, {
//                 expiresIn: "8h",
//             });
//             return res.status(200).json({ token: accessToken });
//         }
//         else {
//             return res.status(400).json({ message: "usuario ya esta activado" });
//         }
//     });
// })

// module.exports = app;