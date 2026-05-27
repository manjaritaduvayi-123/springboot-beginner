const users = [
    {
        name: "John",
        gender: "Male",
        img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
    },
    {
        name: "Jane",
        gender: "Female",
        img: "https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
    },
    {
        name: "David",
        gender: "Male",
        img: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png"
    },
    {
        name: "Emily",
        gender: "Female",
        img: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
    },
    {
        name: "Michael",
        gender: "Male",
        img: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png"
    },
    {
        name: "Sophia",
        gender: "Female",
        img: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
    }
];

function generateRandomProfile(){

    let randomIndex = Math.floor(Math.random() * users.length);

    let user = users[randomIndex];

    document.getElementById("userImage").src = user.img;
    document.getElementById("userName").innerHTML = user.name;
    document.getElementById("userGender").innerHTML = user.gender;
}