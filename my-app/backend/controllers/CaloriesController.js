const db = require("../db/databaseCalories");

//CREATE DB

exports.createDB = (req, res) => {
    let q = 'CREATE DATABASE calories'
    db.query(q, (err, result) =>{
        if(err) throw err;
        return res.status(201).json("DB CCREATED")
    })
}