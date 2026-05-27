function toggleProfile(){

    let currentName =
    document.getElementById("userName").innerText;

    if(currentName === "Jane Doe"){

        document.getElementById("userImage").src =
        "img/john_doe.png";

        document.getElementById("userName").innerText =
        "John Doe";

        document.getElementById("userGender").innerText =
        "Male";
    }
    else{

        document.getElementById("userImage").src =
        "img/jane_doe.png";

        document.getElementById("userName").innerText =
        "Jane Doe";

        document.getElementById("userGender").innerText =
        "Female";
    }
}