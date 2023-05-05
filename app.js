const express = require('express');
const app = express();
// const port=3000;
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());


app.set('view engine', 'ejs');


app.use(express.static('public'));


app.use(bodyParser.json());



app.use('/weather', require('./routes/wheather'));

const port =process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
