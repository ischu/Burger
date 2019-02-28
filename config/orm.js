const connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, cols, value, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += "'"+value+"'";
        queryString += ") ";
        
        console.log(queryString);

        connection.query(queryString, value, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, col, value, condition, cb) {
        var queryString = "UPDATE "+table+" SET "+col+" = "+value+" WHERE "+condition;
        connection.query(queryString, condition, function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;