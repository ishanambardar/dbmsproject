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
        "create table employees(eid int auto_increment PRIMARY KEY,"+
        "name varchar(100)," +
        "gender varchar(7),"+
        "dob Date," +
        "address varchar(200)," +
        "phone varchar(10)," +
        "joindate Date," +
        "wage decimal(6,2))"
    connection.query(query,
        function(err,results,fields){
            console.log(err)
        }
    )
}

    function add(name,gender,dob,address,phone,joindate,wage,callback) {
        connection.query(`insert into employees(name,gender,dob,address,phone,joindate,wage) values('${name}','${gender}',${dob},'${address}','${joindate}','${wage}')`, function(err,data)
        {
            if(err ==null ) {
                callback(data.insertId);
            }
            else{

        }

    })

}

function display() {
    connection.query('select * from employees', function(err,data) {
        console.log("data : " , data)

    });
}

function remove(eid) {
    connection.query(`delete * from employees WHERE eid ='${eid}'`)
}

module.exports = {
    createtable:createtables,
    connect: Connect,
    display: display,
    add: add
}