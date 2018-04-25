const express = require('express');
const app = express();
const ejs = require('ejs');
var bodyParser = require('body-parser');
var path = require('path');
var emdb= require('./db/employee_db');
var eqdb=require('./db/equipment_db');
var mdb=require('./db/member_db');
var sdb=require('./db/supplement_db');
var pdb=require('./db/payroll_db');
const mysql = require('mysql2');

const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gymdb',
    password: 'ishan123'
})

mc.connect();

//var trigger = require("./db/triggers");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});