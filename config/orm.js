// ORM methods for MySQL
var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, burger_name) {
        var queryString = "INSERT ? INTO ??";
        connection.query(queryString, [burger_name, table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, keyChange, valueChange, keyWhere, valueWhere) {
        var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";
        connection.query(queryString, [table, keyChange, valueChange, keyWhere, valueWhere], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;