// connection to MySQL
var mysql = require("mysql");
var orm = require("./orm.js");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "tara1",
    database: "parties_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting" + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

console.log(orm.selectAll);

module.exports = connection;