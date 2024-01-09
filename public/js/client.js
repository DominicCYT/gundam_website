/* An "Async Json And Xml" callback function that sends a GET request for a URL and runs another
callback function.
Note this AJAX function is not called yet.
*/
function ajaxGET(url, callback) {

    // this is standard API
    const xhr = new XMLHttpRequest();

    xhr.onload = function () {

        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            // callback function
            callback(this.responseText);

        } else {
            console.log(this.status);
        }
    }
    xhr.open("GET", url);
    xhr.send();
}

// CLEAR FUNCTION START - function to clear loaded data
document.querySelectorAll(".clear").forEach(function (currentElement, currentIndex, listObj) {

    currentElement.addEventListener("click", function (e) {

        // since our data are arrays there we can go into the index and replace content with ""
        for (let i = 0; i < this.parentNode.childNodes.length; i++) {
            if (this.parentNode.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                if (this.parentNode.childNodes[i].getAttribute("class") == "ajax-loadout") {
                    this.parentNode.childNodes[i].innerHTML = "";
                    break;
                }
            }
        }
    });
});
// CLEAR FUNCTION END


// SECTION FOR AERIAL START
// if HTML is clicked:
document.querySelector("#aerialhtml").addEventListener("click", function (e) {
    ajaxGET("/aerialhtml?format=html", function (data) {
        // populate the specified div with the data thats passed back from server
        document.getElementById("aerial-html").innerHTML = data;
    });
});

// if JSON is clicked: call the AJAX callback function
document.querySelector("#aerialjson").addEventListener("click", function (e) {
    // requests the virtual path from server, and then puts the "doc (server side)/data" it received into fn
    ajaxGET("/aerialjs", function (data) {

        // parse the JSON we get:
        let parsedData = JSON.parse(data);

        // create the HTML string dynamically depending on the length of the data passed back
        let str = "<table>";
        for (let i = 0; i < parsedData.length; i++) {
            let item = parsedData[i];
            str += "<tr><td> <i class=fa-solid&#32;fa-scroll></i><br>" + item["Loadout"]
                + "</td><td><i class=fa-solid&#32;fa-hand-fist></i><br>" + item["Left"]
                + "</td><td><i class=fa-solid&#32;fa-ring></i><br>" + item["Right"]
                + "</td><td><i class=fa-solid&#32;fa-gun></i><br>" + item["Body"]
                + "</td><td><i class=fa-solid&#32;fa-puzzle-piece></i><br>" + item["Support"]
                + "</td></tr><tr>";
        }
        str += "</table>";

        // find the specified div and populate it with the HTML string
        document.getElementById("aerial-json").innerHTML = str;

    });
});
// SECTION FOR AERIAL END


// SECTION FOR CALIBARN START
document.querySelector("#calibarnhtml").addEventListener("click", function (e) {
    ajaxGET("/calibarnhtml?format=html", function (data) {
        document.getElementById("calibarn-html").innerHTML = data;
    });
});


document.querySelector("#calibarnjson").addEventListener("click", function (e) {
    ajaxGET("/calibarnjs", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<table>";
        for (let i = 0; i < parsedData.length; i++) {
            let item = parsedData[i];
            str += "<tr><td> <i class=fa-solid&#32;fa-scroll></i><br>" + item["Loadout"]
                + "</td><td><i class=fa-solid&#32;fa-hand-fist></i><br>" + item["Left"]
                + "</td><td><i class=fa-solid&#32;fa-ring></i><br>" + item["Right"]
                + "</td><td><i class=fa-solid&#32;fa-gun></i><br>" + item["Body"]
                + "</td><td><i class=fa-solid&#32;fa-puzzle-piece></i><br>" + item["Support"]
                + "</td></tr><tr>";
        }
        str += "</table>";
        document.getElementById("calibarn-json").innerHTML = str;
    });
});
// SECTION FOR CALIBARN END


// SECTION FOR PHARACT START
document.querySelector("#pharacthtml").addEventListener("click", function (e) {
    ajaxGET("/pharacthtml?format=html", function (data) {
        document.getElementById("pharact-html").innerHTML = data;
    });
});

document.querySelector("#pharactjson").addEventListener("click", function (e) {
    ajaxGET("/pharactjs", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<table>";
        for (let i = 0; i < parsedData.length; i++) {
            let item = parsedData[i];
            str += "<tr><td> <i class=fa-solid&#32;fa-scroll></i><br>" + item["Loadout"]
                + "</td><td><i class=fa-solid&#32;fa-hand-fist></i><br>" + item["Left"]
                + "</td><td><i class=fa-solid&#32;fa-ring></i><br>" + item["Right"]
                + "</td><td><i class=fa-solid&#32;fa-gun></i><br>" + item["Body"]
                + "</td><td><i class=fa-solid&#32;fa-puzzle-piece></i><br>" + item["Support"]
                + "</td></tr><tr>";
        }
        str += "</table>";
        document.getElementById("pharact-json").innerHTML = str;
    });
});
// SECTION FOR PHARACT END


// SECTION FOR SCHWARZETTE START
document.querySelector("#schwarzettehtml").addEventListener("click", function (e) {
    ajaxGET("/schwarzettehtml?format=html", function (data) {
        document.getElementById("schwarzette-html").innerHTML = data;
    });
});

document.querySelector("#schwarzettejson").addEventListener("click", function (e) {
    ajaxGET("/schwarzettejs", function (data) {
        let parsedData = JSON.parse(data);
        let str = "<table>";
        for (let i = 0; i < parsedData.length; i++) {
            let item = parsedData[i];
            str += "<tr><td> <i class=fa-solid&#32;fa-scroll></i><br>" + item["Loadout"]
                + "</td><td><i class=fa-solid&#32;fa-hand-fist></i><br>" + item["Left"]
                + "</td><td><i class=fa-solid&#32;fa-ring></i><br>" + item["Right"]
                + "</td><td><i class=fa-solid&#32;fa-gun></i><br>" + item["Body"]
                + "</td><td><i class=fa-solid&#32;fa-puzzle-piece></i><br>" + item["Support"]
                + "</td></tr><tr>";
        }
        str += "</table>";
        document.getElementById("schwarzette-json").innerHTML = str;
    });
});
// SECTION FOR SCHWARZETTE END


// SECTION FOR TWEET START

ajaxGET("/tweets", function (data) {
    document.getElementById("tweets-json").innerHTML = data;
});

// SECTION FOR TWEET END