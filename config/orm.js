const connection = require("../config/connection.js");

var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (table, variable, value, cb) {
        var queryString = "INSERT INTO ?? (? = ?)";
        connection.query(queryString, [table, variable, value], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (table, varToUpdate, valueToUpdate, varWhere, valueWhere, cb) {
        var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";
        connection.query(queryString, [table, varToUpdate, valueToUpdate, varWhere, valueWhere], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;