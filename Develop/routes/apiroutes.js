// requiring fs, path (and specifies path location), and uuid.
const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, "../db/db.json");
const uuid = require("uuid");
const noteArray = require("../db/db");

// doing our app export for server routing


module.exports = function (app) {
    // gets the existing notes from dataPath
    app.get("/api/notes", function (req, res) {
        fs.readFile(dataPath, "utf-8", function (err, data) {
            if (err) {
                console.log(err);
            }
            var notesRes = JSON.parse(data);
            res.json(notesRes);

        });
    });

   // "Post" takes user entered note data from the page, pushes it to an array of existing notes, and makes the note accessible to the user.

    app.post("/api/notes", function (req, res) {
        fs.readFile(dataPath, "utf-8", function (err, data) {
            
            if (err) {
                console.log(err)
            }
            let notes;
            if (data) {
                notes = JSON.parse(data);
            }
                
            let createNote = req.body;
            createNote.id = uuid.v4();

            if (data) {
            notes.push(createNote);
            } else {
                notes = [createNote];
            }

            fs. writeFile(dataPath, JSON.stringify(notes), "utf-8", function (err) {
                if (err) throw err;
                res.json(createNote);
                
            })
        });
    });

}