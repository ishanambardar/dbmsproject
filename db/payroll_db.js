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
        "create table payrolls(pid int auto_increment PRIMARY KEY,"+
        "eid int REFERENCES employees(eid)," +
        "paydate Date"+
        "hours int,"+
        "salary float)"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
        }
    )
}

function add(eid,paydate,hours,salary,callback) {
    connection.query(`insert into payrolls(eid,paydate,hours,salary) values('${eid}','${paydate}','${hours}','${salary}')`, function(err,data)
    {
        if(err ==null ) {
            callback(data.insertId);
        }
        else{

        }

    })

}

function display() {
    connection.query('select * from payrolls', function(err,data) {
        console.log("data : " , data)

    });
}

module.exports = {
    createtable:createtables,
    connect: Connect,
    display: display,
    add: add
}