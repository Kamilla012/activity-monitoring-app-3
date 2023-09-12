const mysql      = require('mysql');
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "Calories"
});

db.connect(error =>{
    if(error) throw error;
    console.log("DB connected")
})

module.exports = db