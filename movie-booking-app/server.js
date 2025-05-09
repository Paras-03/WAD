const express = require("express");
const path = require("path");

const app = express();
const PORT = 3010;

// Middleware to support static websites
app.use(express.static(path.join(__dirname, 'public')));

// Parse data from URL
app.use(express.urlencoded({extended: true}));

// Handle button click
app.post("/book", (req, res) => {
    const {name, movie, seats} = req.body;
    console.log(`Booking recieved: ${name}, booked ${seats} for ${movie}`);
    res.send(`<h2>Thank you, ${name}! Successfully booked ${seats} tickets for ${movie}.</h2>`) 
});

app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`);
});