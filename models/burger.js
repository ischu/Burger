const orm = require("../config/orm.js");

// burger ORMs
var burger =
{
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res)
        });
    },
    addBurger: function (burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            cb(res)
        })
    },
    devourBurger: function (burgerId, cb) {
        orm.updateOne("burgers", "devoured", "true", "id", burgerId, function (res) {
            cb(res)
        })
    },
}

module.exports = burger;