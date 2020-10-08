const  express = require("express");
const app = express();


//mongo
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
//connect to MongoDB

const db = mongoose.connection;
db.on('error', eror => console.error(error));
db.once('open', () => console.log('Connected Successfully'));
mongoose.Promise=global.Promise;

//body-parser
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));


module.exports=app;
