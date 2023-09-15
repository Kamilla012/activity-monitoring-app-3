const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
  secret: 'your-secret-key', // To powinno być unikalne i bezpieczne hasło
  resaveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000* 60 *60 * 24 //one day
  }
}));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup"
});


app.get('/', (req, res) => {
    if(req.session.user){
        return res.json({valid: true, name: req.session.name})
    }else{
        return res.json({valid: false})
    }
})

app.post('/signup', (req, res) => {
  const sql = "INSERT INTO login (`name`, `email`, `password`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.password
  ];
  db.query(sql, [values], (err, data) => {
    if (err) return res.json({ Message: "Error in Node" });
    return res.json(data);
  });
});

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) return res.json({ Message: "Error inside server" });

    if (data.length > 0) {
      // Ustaw sesję username
      req.session.name = data[0].name;
      console.log(req.session.name);
      return res.json({ Login: true});
    } else {
      return res.json({ Login: false });
    }
  });
});

app.listen(8081, () => {
  console.log("listening");
});
