const express = require("express")
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

//IMPORT ROUTES
const calories = require('./routes/CaloriersRoutes')

//MIDDLEWARE
app.use(morgan('dev'))
app.use(bodyParser.json({limit: "5mb"}))
app.use(bodyParser.urlencoded({
    limit: "5mb",
    extends: true
}))

app.use(cors());

//ROUTE MIDDLEWARE
// app.use('/api', calories)

//POST
const port = 8000;
app.listen(port,() =>{
    console.log(`Serwer running on port ${port}`)
})