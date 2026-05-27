// CURRENT USER INDEX
var currentUserIndex = 0;


// USER ARRAY
var userArray = [

    {
        "name": "John Doe",
        "gender": "Male",
        "image": "img/john_doe.png"
    },

    {
        "name": "Jane Doe",
        "gender": "Female",
        "image": "img/jane_doe.png"
    }

];


// TOGGLE FUNCTION
function toggleUser(){

    currentUserIndex++;

    // RESET INDEX
    if(currentUserIndex >= userArray.length){
        currentUserIndex = 0;
    }

    // GET NEXT USER
    var nextUser =
    userArray[currentUserIndex];

    // DISPLAY USER
    displayUser(nextUser);
}


// DISPLAY USER FUNCTION
function displayUser(user){

    document.getElementById("userImage").src =
    user.image;

    document.getElementById("userName").innerText =
    user.name;

    document.getElementById("userGender").innerText =
    user.gender;
}