const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gymdb',
    password: 'ishan123'
});
function Connect() {
    connection.connect();
    console.log("connected")
}
function createtables() {
    var query=
        "create table members(mid int auto_increment PRIMARY KEY,"+
        "name varchar(100)," +
        "gender varchar(7),"+
        "dob Date," +
        "address varchar(200)," +
        "phone varchar(10)," +
        "startdate Date," +
        "membershiptype varchar(10))"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
        }
    )
}

function add(name,gender,dob,address,phone,startdate,membershiptype,callback) {
    connection.query(`insert into members(name,gender,dob,address,phone,startdate,membershiptype) values('${name}','${gender}',${dob},'${address}','${startdate}','${membershiptype}')`, function(err,data)
    {
        if(err ==null ) {
            callback(data.insertId);
        }
        else{

        }

    })

}

function display() {
    connection.query('select * from members', function(err,data) {
        console.log("data : " , data)

    });
}

module.exports = {
    createtable:createtables,
    connect: Connect,
    display: display,
    add: add
}