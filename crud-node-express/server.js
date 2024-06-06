const express = require('express');
const bodyParser = require('body-parser');
const dbConn=require('./config/dbConfig');
const app = express();

const routes=require('./Routes/routes')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(routes);


app.get('/', (req, res) => {
    res.json({"message": "Hello Crud Node Express"});
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});