const express = require('express');
const htmlRoute = require('./routes/htmlRoute')

const app = express();

const PORT = 3000;
app.use(express.json());

app.use(express.urlencoded({extended:true}));
// Using middleware to make folder static
app.use(express.static('public'));

app.use('/', htmlRoute)

app.listen(PORT, ()=> {console.log("LISTENING ON PORT", PORT)});