// ORM methods for MySQL
var orm = {
    selectAll: function (table) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function (table, variable, value) {
        var queryString = "INSERT INTO ?? (? = ?)";
        connection.query(queryString, [table, variable, value], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function (table, varToUpdate, valueToUpdate, varWhere, valueWhere) {
        var queryString = "UPDATE ?? SET ? = ? WHERE ? = ?";
        connection.query(queryString, [table, varToUpdate, valueToUpdate, varWhere, valueWhere], function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
};

module.exports = orm;