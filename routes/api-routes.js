// Dependencies
// =============================================================

// Requiring our models
var db = require("../models/sequelize-burger.js");

// breaks when i input this path ../models/sequelize - burger.js
// Routes
// =============================================================
module.exports = function (app) {

    app.post("/api/burgers", function (req, res) {
        db.Burgers.create({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }).then(function (dbBurgers) {
            res.json(dbBurgers) //promose of new data returened
        })
            .catch(function (err) {
                res.json(err); //catches error to prevent crash
            }); //end of create method

    }); //end of post 

    app.put("/api/burgers/:id", function (req, res) {
        db.Burgers.update({
            burger_name: req.body.burger_name,
            devoured: req.body.devoured
        }, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbBurgers) {
                res.json(dbBurgers);

            }).catch(function (err) {
                res.json(err);
            });
    }); //end of put aka update

    app.delete("/api/burgers/:id", function (req, res) {
        db.Burgers.destory({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurgers) {
            res.json(dbBurgers)
        }); //end of destory method 

    }); //end of delete

}; //end of app exports 







