//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')

//Express config (telling node creating an express server):
//================================================
var PORT = process.env.PORT || 3015;
var app = express();
// Requiring our models for syncing
var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
// =============================================================
app.use(express.static("public"));

// Sets up the Express app to handle data parsing
// =============================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(bodyParser.text());

// Set Handlebars.
// =============================================================
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});