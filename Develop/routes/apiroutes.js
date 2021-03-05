
const fs = require('fs');
const path = require('path');
const dataPath = path.join(_dirname, "../db/dbjson");
const uuid = require("uuid");
module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        fs.readFile(dataPath, "utf-8", function (err, data) {
            if (err) {
                console.log("Sorry, and error occurred. Please try again");
            } else {
                var notes = JSON.parse(data);
                res.json(notes);
            }

        });
    });
    


    // var newStore = {
    //     storeID: $("#storeID").val().trim(),
    //     storeName: $("#storeName").val().trim(),
    //     storeDescription: $("#storeDescription").val().trim(),
    //     status: $("#status").val().trim()
    // };

    app.post("/api/notes", "/api/notes", function (req, res) {
        fs.readFile(dataPath, "utf-8", function (err, data) {
            if (err) {
                console.log("Sorry, and error occurred. Please try again");
            } else {
                var notes = JSON.parse(data);
                res.json(notes);
            }
                let createNote = req.body;
                createNote.id = uuidv4();
                notes.push(createNote);

                fs. writeFile(dataPath, JSON.stringify(notes), "utf-8", function (err) {
                    if (err) {
                        console.log("Sorry, an error occurred and your note was not created");
                    } else {
                        res.json(notes);
                        return;
                    }
                })

        });
    });


    app.post("/api/storeupdate", function (req, res) {

        var storeUpdate = req.body;
        //we need to get the correct object
        for (var i = 0; i < storeData.length; i++) {
            console.log(storeData[i].storeID, storeUpdate.storeID)
            if (storeData[i].storeID == storeUpdate.storeID) {

                storeData[i].status = (storeData[i].status === 'open') ? 'closed' : 'open';

                break; //Stop this loop, we found it!
            }

        }


        res.json(true);




    });


};
