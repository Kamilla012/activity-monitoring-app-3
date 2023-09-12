const express = require("express")
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')


//MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({limit: "5mb"}))
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extends: true
}))

app.use(cors());

//POST
const port = 8000;
app.listen(port,() =>{
    console.log(`Serwer running on port ${port}`)
})