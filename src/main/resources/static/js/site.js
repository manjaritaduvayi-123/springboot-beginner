function generateRandomProfile(){

    const maleImage =
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    const femaleImage =
        "https://cdn-icons-png.flaticon.com/512/4140/4140048.png";

    let random = Math.floor(Math.random() * 2);

    if(random === 0){

        document.getElementById("userImage").src = maleImage;
        document.getElementById("userName").innerText = "John";
        document.getElementById("userGender").innerText = "Male";

    }
    else{

        document.getElementById("userImage").src = femaleImage;
        document.getElementById("userName").innerText = "Emma";
        document.getElementById("userGender").innerText = "Female";

    }
}