const express = require ('express');

const bodyParser = require("body-parser");
const mongoose = require ('mongoose');

const app = express();
const { json } = require("body-parser");

//connnect db

mongoose.connect("mongodb+srv://max:max@cluster0.uokio.mongodb.net/auth?retryWrites=true&w=majority")
        .then(()=>{
          console.log("CONNECT DB..");
        })

        .catch(()=>{ console.log("CONNECTION ERROR...")
        });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use((res,req, next) =>{

  console.log('first middleware');
  //next(); // calling next app.use()
});

//export app
module.exports = app;
