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
router.post("/api/burgers", function(req, res) {
    burger.addBurger(
      [req.body.name]
    , function(result) {
      // Send back the ID of the new burger
      res.json({ id: result.insertId });
    });
  });
  
// PUT (update) burger to devoured

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    var id = req.params.id;
    console.log("condition", condition);
  
    burger.devourBurger( id, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

// DELETE
// router.delete("/api/burgers/:id", function(req, res) {
//     var condition = "id = " + req.params.id;
  
//     burger.delete(condition, function(result) {
//       if (result.affectedRows == 0) {
//         // If no rows were changed, then the ID must not exist, so 404
//         return res.status(404).end();
//       } else {
//         res.status(200).end();
//       }
//     });
//   });
module.exports = router;