var people = require("../app/data/friends.js")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json()
    })
    app.post("/api/friends", function (req, res) {
        var vals = req.body.responses;
        var minDiff = 41;
        var currentFrnd = people[0];
        //console.log(req.body)
        for (let i = 0; i < people.length; i++) {
            var score = 0;
            for (let m = 0; m < 10; m++) {
                //friends === people[i].responses
                //user === vals
                var frndRes = parseInt(people[i].responses[m])
                var userRes = vals[m]
                var diff = Math.abs(frndRes - userRes)
                score += diff
                // score += diff === (score = (score + diff))
            }

            if (minDiff > score) {
                minDiff = score
                currentFrnd = people[i]
            }

            //running total of the differnece of each answer for each question

        }
        res.json(currentFrnd)
    })
}
