// required for express
const express = require('express')
const app = express()
app.use(express.json());
// this is the filesystem library
const fs = require("fs");

// we are mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));


app.get("/", function (req, res) {
    // retrieve and send an HTML document from the file system
    // req is the request
    // res is the response
    // so we are saying respond by sending the doc on the server to the client
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});


// CALIBARN SECTION BEGIN
app.get("/calibarnjs", function (req, res) {

    let doc = fs.readFileSync("./app/data/calibarn.js", "utf8");

    // right now not important, but lets others understand the response
    // must send a header for every req and res
    res.setHeader("Content-Type", "application/json");
    
    // respond with text stream aka data 
    res.send(doc);

});

// accepts query string
app.get("/calibarnhtml", function (req, res) {

    //let formatOfResponse = req.query.format;
    let formatOfResponse = req.query["format"];

    if (formatOfResponse == "html") {
        // MIME type
        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/calibarn.html", "utf8"));

    } else if (formatOfResponse == "json") {
        // MIME type
        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/calibarn.js", "utf8"));

    } else {
        // just send JSON message
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});
// CALIBARN SECTION END

// AERIAL SECTION BEGIN
app.get("/aerialjs", function (req, res) {

    let doc = fs.readFileSync("./app/data/aerial.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.send(doc);
});

app.get("/aerialhtml", function (req, res) {

    let formatOfResponse = req.query["format"];

    if (formatOfResponse == "html") {

        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/aerial.html", "utf8"));

    } else if (formatOfResponse == "json") {

        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/aerial.js", "utf8"));

    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});
// AERIAL SECTION END

// PHARACT SECTION BEGIN
app.get("/pharactjs", function (req, res) {

    let doc = fs.readFileSync("./app/data/pharact.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.send(doc);
});

app.get("/pharacthtml", function (req, res) {

    let formatOfResponse = req.query["format"];

    if (formatOfResponse == "html") {

        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/pharact.html", "utf8"));

    } else if (formatOfResponse == "json") {

        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/pharact.js", "utf8"));

    } else {

        res.send({ status: "fail", msg: "Wrong format!" });
    }
});
// PHARACT SECTION END

// SCHWARZETTE SECTION BEGIN
app.get("/schwarzettejs", function (req, res) {

    let doc = fs.readFileSync("./app/data/schwarzette.js", "utf8");
    res.setHeader("Content-Type", "application/json");
    res.send(doc);
});

app.get("/schwarzettehtml", function (req, res) {

    let formatOfResponse = req.query["format"];

    if (formatOfResponse == "html") {

        res.setHeader("Content-Type", "text/html");
        res.send(fs.readFileSync("./app/data/schwarzette.html", "utf8"));

    } else if (formatOfResponse == "json") {

        res.setHeader("Content-Type", "application/json");
        res.send(fs.readFileSync("./app/data/schwarzette.js", "utf8"));

    } else {
        res.send({ status: "fail", msg: "Wrong format!" });
    }
});
// SCHWARZETTE SECTION END

//USER TWEETS START

app.get("/tweets", function (req, res) {

    const mysql = require("mysql2");
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "assignment6"
    });
    let myResults = null;
    connection.connect();
    
    let views = 5;

    connection.execute(
        "SELECT a.user_name, b.post_desc, b.post_date, b.post_time, b.post_views FROM a01365286_user AS a INNER JOIN a01365286_user_timeline AS b ON b.user_id = a.ID;",
        [views],
        function (error, results, fields) {

            if (error) {
                console.log(error);
            }

            let table = "<table id='tweettable'><tr><th>User</th><th>Tweet</th><th>Date</th><th>Time</th><th>Views</th>";
            for (let i = 0; i < results.length; i++) {
                table += "<tr id='tweetrow'>"
                for (const property in results[i]) {
                    table += "<td>" + results[i][property] + "</td>";
                }
                table += "</tr>";
            }
            
            table += "</table>";
            res.send(table);
            connection.end();
        }
    );

});

//USER TWEETS END



// RUN SERVER
const port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});

// for resource not found (i.e., 404)
app.use(function (req, res) {
    // this could be a separate file too - but you'd have to make sure that you have the path
    // correct, otherewise, you'd get a 404 on the 404 (actually a 500 on the 404)
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});