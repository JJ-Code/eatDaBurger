// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

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
        console.log(req.body);
        db.Customers.create({
                name: req.body.customerName
            })


            .then(function (dbCustomer) {
                console.log(dbCustomer.dataValues.id);
                console.log(req.body.newBurgerState.devoured);
                db.Burgers.update({
                    devoured: req.body.newBurgerState.devoured,
                    CustomerId: dbCustomer.dataValues.id

                }, {
                    where: {
                        id: req.params.id //params grabs from url 
                    }

                }).then(function (dbBurgers) {
                    //include here?

                    console.log(dbBurgers);
                    res.json(dbBurgers);
                })

            }) // the first then promise


            .catch(function (err) {
                res.json(err);
            });
    }); //end of put aka update

    app.delete("/api/burgers/:id", function (req, res) {
        console.log(req.params.id);
        db.Burgers.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbBurgers) {
            res.json(dbBurgers)
        }); //end of destory method 

    }); //end of delete

}; //end of app exports 







// app.put("/api/burgers/:id", function (req, res) {
//     db.Burgers.update({
//         devoured: req.body.devoured

//         }, {
//             where: {
//                 id: req.params.id //params grabs from url 
//             }
//         }).then(function (dbBurgers) {
//             res.json(dbBurgers);

//         }).catch(function (err) {
//             res.json(err);
//         });
// }); //end of put aka update