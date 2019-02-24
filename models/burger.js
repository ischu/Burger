const orm = require("../config/orm.js");

// burger ORMs
var burger =
{
    selectAll : function() {orm.selectAll("burgers")},
    addBurger : function(burgerName) 
    {orm.insertOne("burgers","burger_name", burgerName)},
    devourBurger : function(burgerName) 
    {orm.updateOne("burgers", "devour", "true", "burger_name", burgerName)},
}

module.exports = burger;