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
    },

    {
        "name": "Alex Smith",
        "gender": "Male",
        "image": "img/john_doe.png"
    },

    {
        "name": "Emily Johnson",
        "gender": "Female",
        "image": "img/jane_doe.png"
    }

];

function generateRandomUser(){

    var randomIndex =
    Math.floor(
        Math.random() * userArray.length
    );

    var randomUser =
    userArray[randomIndex];

    displayUser(randomUser);
}

function displayUser(user){

    document.getElementById("userImage").src =
    user.image;

    document.getElementById("userName").innerText =
    user.name;

    document.getElementById("userGender").innerText =
    user.gender;
}