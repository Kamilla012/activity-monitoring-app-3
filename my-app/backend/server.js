import session from "express-session";
import  cookieParser from 'cookieParser'
const express = require("express");
const mysql = require('mysql');
const cors = require('cors');



const app = express();
app.use(cors())
app.use(express.json())
// app.use(cookieParser())
// app.use(session({
//     secret: 'secret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         secure: false,
//         maxAge: 1000 * 60 * 60 * 24
//     }
// }))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
}) 



app.post('/signup', (req, res) =>{
    const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) =>{
        if(err) return res.json({Message: "Error in Node"});
        
        return res.json(data);
    })
})





app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    // const values = [
    //     req.body.email,
    //     req.body.password
    // ]
    db.query(sql, [req.body.email, req.body.password], (err, data) =>{
        if(err) return res.json({Message: "Error inside"});
        if(data.length > 0){
            // req.session.username = data[0].username;
            console.lof(req.session.username)
            return res.json({Login: true});
        }else{
            return res.json({Login: false});
        }
    })
})




app.listen(8081, () => {
    console.log("listening");
})