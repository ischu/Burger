const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

// ROUTES
// GET all burger data for index page
router.get("/", function(req, res){
    burger.all(function(data){
        var hbObj = {
            burgers: data
        };
        console.log(hbObj);
        res.render("index", hbObj);
    });
});
// POST new burger
// PUT (update) burger to devoured
module.exports = router;