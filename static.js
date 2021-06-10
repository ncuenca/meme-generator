// HEROKU STUFF
// npm packages
const express = require("express");
const morgan = require("morgan");

// globals
const PORT = process.env.PORT || 3000; // heroku will assign a port env variable
const app = express();

// app config
app.use(morgan("tiny"));

app.get("/", (req, res, next) => {
  return res.json("DEPLOYED!");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  return next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  return res.json({
    message: err.message,
    /*
     if we're in development mode, include stack trace (full error object)
     otherwise, it's an empty object so the user doesn't see all of that
    */
    error: app.get("env") === "development" ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

window.onload = function(){ 


    // FORM SUBMIT FUNCTION
    var form = document.forms['theform']
    form.addEventListener("submit", function(event) { 
        // PREVENTS REFRESH
        event.preventDefault();
        
        // SAVES SUBMITTED VALUES
        let imageLink = document.getElementById('image-link').value;
        let topCaption = document.getElementById('top-caption').value.toUpperCase();
        let botCaption = document.getElementById('bot-caption').value.toUpperCase();

        // CLEARS TEXTFIELDS
        document.getElementById('image-link').value = "";
        document.getElementById('top-caption').value = "";
        document.getElementById('bot-caption').value = "";  
        
        
        // CREATES P ELEMENTS WITH SAVED VALUES
        let paraImage = document.createElement("img");
        paraImage.src = imageLink;
        paraImage.id = "meme-image";
        let paraTop = document.createElement("p");
        paraTop.innerHTML = topCaption;
        paraTop.id = "meme-top"
        let paraBot = document.createElement("p");
        paraBot.innerHTML = botCaption;
        paraBot.id = "meme-bot";

        // FINDS MEME DIV AND ADDS CREATED P ELEMENTS TO IT
        let memeDiv = document.getElementById('memes-div');
        let newDiv = document.createElement("div");
        newDiv.id = "meme-div";
        memeDiv.appendChild(newDiv);
        newDiv.appendChild(paraImage);
        newDiv.appendChild(paraTop);
        newDiv.appendChild(paraBot);
        
        // ADDS REMOVAL FUNCTION FOR MEME DIVS
        newDiv.addEventListener("click", function (event) {
            newDiv.remove();
        });

        return false;
    });

    
};

