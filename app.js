const express = require('express');


const app = express();


app.use(express.static('public')); 




app.get("/", (request, response) => {
    response.sendFile(__dirname + '/views/home.html');
});


app.get("/about", (request, response) => {
    response.sendFile(__dirname + '/views/about.html');
});


app.get("/works", (request, response) => {
    response.sendFile(__dirname + '/views/works.html');
});

app.get("/images", (request, response) => {
    response.sendFile(__dirname + '/views/images.html');
});





app.listen(3000, () => console.log("express app listening in port 3000"));

