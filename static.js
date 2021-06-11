
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

