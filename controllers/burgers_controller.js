const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// ROUTES
// Gets all burger data for index page
router.get("/", function(req, res){
    burger.all(function(data){
        var handlebarsObj = {
            // SET HB NAME TO "burgers"
            burgers: data
        };
        console.log(handlebarsObj);
        res.render("index", handlebarsObj);
    });
});
// posts new burger
// put (update) burger to devoured
module.exports = router;