const express = require('express');

// Setting up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Using middleware to make folder static
app.use(express.static('public'));
htmlRoute = require('./routes/htmlRoute')(app)
apiRoute = require('./routes/apiRoute')(app)

// Start server
app.listen(PORT, ()=> {console.log("LISTENING ON PORT", PORT)});