const express = require('express');
const app = express();
// const port=3000;
const cors = require('cors');
const bodyParser = require('body-parser');

const dotenv = require("dotenv");
const port = process.env.PORT || 8080;


app.use(cors());
dotenv.config();
app.use(bodyParser.json());



app.use('/weather', require('./routes/wheather'));

app.get("/", (req,res)=>{
    res.send("Express backend");
})

app.listen(port, () => console.log(`Server listening on port ${port}`));
