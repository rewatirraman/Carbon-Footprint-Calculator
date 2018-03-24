
function functionback() { //function is called when the back button is clicked
     history.go(-1);
}


function validate() {
    var nameVal = document.forms["contactUs"]["name"].value; 
    if (nameVal==null || nameVal=="") {
        alert("Name must be filled out");
    }

    var commentVal = document.forms["contactUs"]["comments"].value;
    if (commentVal==null || commentVal=="") {
        alert("Comment must be filled out");
    }
}




function handleButtonClick() {
    var nameInput = document.getElementById("nameTextInput").value;
    
    var commentInput = document.getElementById("commentTextInput").value;
    
    if (nameInput!="" && commentInput!="") { // if statement used to validate form      
        var ul = document.createElement("ul");
        ul.setAttribute("id", nameInput);

        document.getElementById("visitorlist").appendChild(ul);

        var visitorFeedback = nameInput + ": " + commentInput; // concatenating the two variables 

        var li = document.createElement("li");

        li.innerHTML = visitorFeedback;

        var ul = document.getElementById(nameInput);

        ul.appendChild(li);
    } else {
        alert ("Name & Comment must be filled out"); // Display JavaScript alert  
    }
}
