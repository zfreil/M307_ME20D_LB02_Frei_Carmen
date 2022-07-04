function validateFrom()
{
    let name = document.forms["myForm"]["name"].value;
    var nameArray = name.split('');

    if (name == "")
    {
        alert("Name must be filled out");
        return false;
    }
    else if (name.length < 2)
    {
        alert("Name must be longer than 2 characters");
        return false;
    }
    nameArray.forEach(checkForNumbers);



    let email = document.forms["myForm"]["email_address"].value;

    if (!validateEmail(email)) {
        alert("Email not valid");
        return false;
    }



    let birthday = new Date(document.forms["myForm"]["GD"].value);
    var today = new Date();
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (age < 18 || age > 100)
    {
        alert("Age not valid");
        return false;
    }



    var select = document.getElementById("auswahl");
    if (select.value == "auswahl")
    {
        alert("Please select an option!");
        return false;
    }



    var radio1 = document.getElementById("ja").checked;
    var radio2 = document.getElementById("nein").checked;

    if (!radio1 && !radio2)
    {
        alert("Please select a radio button");
        return false;
    }



    let comments = document.forms["myForm"]["comments"].value;
    if (comments.length != 0)
    {
        if (comments.length < 10 || comments.length > 300) {
            alert("Comment has an invalid lenght of characters");
            return false;
        }
    }
    

    let agb = document.getElementById("agb");
    if (!agb.checked)
    {
        alert("Please accept the agb");
        return false;
    }

    alert("Thank you for your submission");
}

function checkForNumbers(item, index)
{
    if (!isNaN(item))
    {
        alert("Name must not contain numbers");
    }
}

function validateEmail(email)
{
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
}