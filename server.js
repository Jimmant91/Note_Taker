// Setting up Express
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
// Using middleware to make folder static
app.use(express.static('public'));
app.use(express.json());

require('./routes/apiRoute')(app)
require('./routes/htmlRoute')(app)

// Start server
app.listen(PORT, ()=> {console.log("LISTENING ON PORT", PORT)});