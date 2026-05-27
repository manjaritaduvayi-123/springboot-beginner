console.log("Hello from JS");

var users = [
    {
        "name" : "John",
        "gender" : "Male",
        "img" : "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
        "name" : "Jane",
        "gender" : "Female",
        "img" : "https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
    }
];

var currentUserIndex = 0;

function toggleCard(){

    currentUserIndex = (currentUserIndex + 1) % 2;

    var user = users[currentUserIndex];

    document.getElementById("userImage").src = user.img;
    document.getElementById("userGender").innerHTML = user.gender;
    document.getElementById("userName").innerHTML = user.name;
}