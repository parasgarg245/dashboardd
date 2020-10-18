const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));



mongoose.connect("mongodb://localhost:27017/matchDb", { useNewUrlParser: true, useUnifiedTopology: true })

const matchSchema={
        id:String,
        season : String,
         city : String,
        date : String,
        team1 : String,
        team2 : String,
        toss_winner : String,
        toss_decision : String,
        result : String,
        dl_applied : String,
        winner : String,
        win_by_runs : String,
        win_by_wickets : String,
        player_of_match : String,
        venue : String,
        umpire1 : String,
        umpire2 : String,
        umpire3 : Null

}
const Match=mongoose.model("Match",matchSchema)

var matches=[];

app.get("/", function (req, res) {
    Match.find({}, function (err, matches) {

        res.render("test", {
            matches:matches
        });

    })

})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, function () {
    console.log("Server  started on port 3000 ");
});