const express = require("express");
const axios= require("axios");
const ejs= require("ejs");

const app=express();
app.set('view engine', 'ejs');
app.use(express.static("public"))

const url= "https://api.nasa.gov/planetary/apod?api_key=2AL0WbpzpAQpHVgxWESIWITl0CQbaEXIlRS4upsK&start_date=2021-06-01&end_date=2021-07-01";

let results=[];
app.get("/", function(req, res){    
    axios.get(url)
    .then(response => {
       results=response.data;
       res.render("home", {posts: results});
    })
    .catch(error => {
        console.log(error);
    });       
});

app.listen(3000, function(){
    console.log("Server is on port 3000!");
});




