// Allow for creating pathways to HTML pages
var path = require("path");

//Function that allows for data to move from HTML
module.exports = function (app) {

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}