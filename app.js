const express = require('express')
const app = express()

const { connectDB } = require("./config/dbConnection")
const { port } =  require("./config");

connectDB();
const weatherApp_api =  require("./routes/weatherApp_api");

app.use(express.json());

app.use('/weather_api', weatherApp_api);

app.get('/', function (req, res) {
   res.send('Hello World')
})

app.listen(port,() => {
   console.log(`serverrunning on port ${port}`);
})