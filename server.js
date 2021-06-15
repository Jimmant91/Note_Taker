const express = require('express');
const htmlRoute = require('./routes/htmlRoute')
const apiRoute = require('./routes/apiRoute')
const fs = require("fs")

// Setting up Express
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Using middleware to make folder static
app.use(express.static('public'));
app.use('/', htmlRoute)
app.use('/', apiRoute)

// Start server
app.listen(PORT, ()=> {console.log("LISTENING ON PORT", PORT)});