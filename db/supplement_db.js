const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gymdb',
    password: 'ishan123'
})
function Connect() {
    connection.connect();
    console.log("connected")

}function createtables() {
    var query=
        "create table supplements(sid int auto_increment PRIMARY KEY,"+
        "name varchar(100)," +
        "type varchar(100),"+
        "purchasedate date,"+
        "costprice float"+
        "saleprice float"+
        "weight float"+
        "pieces integer)"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
        }
    )
}

function add(name,type,purchasedate,costprice,saleprice,weight,pieces,callback) {
    connection.query(`insert into supplements(name,type,purchasedate,costprice,saleprice,weight,pieces) values('${name}','${type}','${purchasedate}','${saleprice}','${weight}','${pieces}')`, function(err,data)
    {
        if(err ==null ) {
            callback(data.insertId);
        }
        else{

        }

    })

}

function display() {
    connection.query('select * from supplements', function(err,data) {
        console.log("data : " , data)

    });
}

module.exports = {
    createtable:createtables,
    connect: Connect,
    display: display,
    add: add
}