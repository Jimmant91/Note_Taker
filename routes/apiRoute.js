// Linking route to data source
const fs = require("fs")
const noteData = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = (app) => {
    // GET notes from db
    app.get("/api/notes", (req, res) => {
        res.json(noteData);
    });

    // POST notes and save to db
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        const noteId = (noteData.length).toString();
            console.log(`Note id`, noteId, `created`);

        newNote.id = noteId;
        noteData.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(noteData), (err) => {
            if (err) throw (err);        
        });

        res.json(noteData);    
    });
};