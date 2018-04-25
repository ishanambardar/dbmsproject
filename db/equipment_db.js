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
        "create table equipment(eqid int auto_increment PRIMARY KEY,"+
        "name varchar(100)," +
        "wstatus varchar(7))"

    connection.query(query,
        function(err,results,fields){
            console.log(err)
        }
    )
}

function add(name,wstatus,callback) {
    connection.query(`insert into equipment(name,wstatus) values('${name}','${wstatus}')`, function(err,data)
    {
        if(err ==null ) {
            callback(data.insertId);
        }
        else{

        }

    })

}

function display() {
    connection.query('select * from equipment', function(err,data) {
        console.log("data : " , data)

    });
}

module.exports = {
    createtable:createtables,
    connect: Connect,
    display: display,
    add: add
}