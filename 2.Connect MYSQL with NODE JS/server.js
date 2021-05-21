const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Abhishek@123",
    database:"sakila",
    multipleStatements:true
})

mysqlConnection.connect((err)=>{
    if(err)
    {
        console.log(" NOT connected");
    }
    else
    {
        console.log("YES WE DONE IT");
    }
})
app.listen(4600);