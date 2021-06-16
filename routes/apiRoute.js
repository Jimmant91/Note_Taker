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

    module.exports = (app) => {
        // GET notes from db
        app.get("/api/notes", (req, res) => {
            res.json(noteData);
        });
       
       // POST notes and save to db
        app.post("/api/notes", (req, res) => {
    
            let newNote = req.body;
            let noteId = (noteData.length).toString();
                console.log(`Note id`, noteId, `created`);
    
            newNote.id = noteId;
            noteData.push(newNote);
            
            fs.writeFileSync("./db/db.json", JSON.stringify(noteData), (err) => {
                if (err) throw (err);        
            }); 
    
            res.json(noteData);    
        });
       
        // DELETE notes
        app.delete("/api/notes/:id", (req, res) => {
            //use fs to read data and store to notesArray
            console.log(req.params.id);
            readFileSync('db/db.json', 'utf8').then(data => {
               const notesArray = JSON.parse(data);
               let deletedNote;
              
               // remove the note with req.params.id === note.id
               notesArray.map((note, index) => {
                if (note.id === req.params.id) {
                    deletedNote = index;
                }
               });
               
               notesArray.splice(deletedNote, 1);
        
               //use fs to rewrite to db.json w/ updated notesArray
               writeFileSync('db/db.json', JSON.stringify(notesArray));
                res.json(notesArray);
            });
        }); 
    }
};