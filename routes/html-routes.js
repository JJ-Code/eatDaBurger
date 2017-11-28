// Dependencies
// =============================================================
var path = require("path");
// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

    // GET route for getting all of the burgers to index
    
    // index route loads 
    app.get("/", function (req, res) {
        db.Burgers.findAll({}).then(function (dbBurgers) {
            var hbsObject = {
                burgers: dbBurgers
            };
            // console.log(hbsObject);
            res.render(path.join(__dirname, "../views/index.handlebars"), hbsObject);
        }); 

    });

    // app.get("/", function (req, res) {
        // db.Burgers.findAll({}).then(function (dbBurgers) {
        //     var hbsObject = {
        //         burgers: dbBurgers
        //     };
        //     console.log(hbsObject);
        //     res.render("index", hbsObject);
        // }); //end of db burgers findall method 
    // }); //end of get 

    
}; //end of app exports 


