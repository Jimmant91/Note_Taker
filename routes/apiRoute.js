// Linking route to data source
const fs = require("fs")
let noteData = require("../db/db.json");
//https://www.npmjs.com/package/uuid
const { v4: uuidv4 } = require('uuid');
const { parse: uuidParse } = require('uuid');

module.exports = (app) => {
    // GET notes from db
    app.get("/api/notes", (req, res) => {
        res.json(noteData);
    });

    // POST notes and save to db
    app.post("/api/notes", (req, res) => {
        console.log(req.body)

        req.body.id = uuidv4();
        console.log(req.body)
        noteData.push(req.body);
        
        // Rewrite
        fs.writeFileSync("./db/db.json", JSON.stringify(noteData), (err) => {
            if (err) throw (err);        
        });
        res.json(noteData);    
    });

       
    // DELETE notes
    app.delete("/api/notes/:id", (req, res) => {

        let noteId = req.params.id;
        // let newId = 0;
        console.log(`Deleted note ${typeof noteId}`, noteData);

        noteData = noteData.filter(currNote => {
            return currNote.id !== noteId;
        });
        // for (currNote of noteData) {
        //     currNote.id = newId.toString();
        //     newId++;
        // }
        console.log("UPDATED", noteData)
        fs.writeFile("./db/db.json", JSON.stringify(noteData), err => {
            if (err) throw (err);
        });
        res.json(noteData);
    });
};