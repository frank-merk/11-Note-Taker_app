// requiring fs, path (and specifies path location), and uuid.
const fs = require('fs');
const path = require('path');
const dataPath = path.join(_dirname, "../db/dbjson");
const uuid = require("uuid");

// doing our app export for server routing

module.exports = function (app) {
    // gets the existing notes from dataPath
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

   // "Post" takes user entered note data from the page, pushes it to an array of existing notes, and makes the note accessible to the user.

    app.post("/api/notes", "/api/notes", function (req, res) {
        fs.readFile(dataPath, "utf-8", function (err, data) {
            if (err) {
                console.log("Sorry, and error occurred. Please try again");
            } else {
                var notes = JSON.parse(data);
                res.json(notes);
            }
                let createNote = req.body;
                createNote.id = uuid.v4();
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

    // delete functionality using the splice method. Credit to Lita Beach who shared this solution option in the Bootcamp Slack channel
    app.delete("/api/notes/:id", function (req, res) {
        // we want to take the id of the note we want to delete
        var noteId = req.params.id
        // looping through to find a matching note id
        for (i = 0; i < notes.length; i++){
            if (notes[i].id === noteId) {
                notes.splice(i, 1);
            }
        }
        // updating the main note filesystem and returning it to user
        fs.writeFileSync(path.join(__dirname, "../db/dbjson"), JSON.stringify(notes));

        res.json(req.body);

    });
};

