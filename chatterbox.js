function addUser(){
    user_name = document.getElementById("user_name").value;

    localStorage.setItem("user_name", user_name);
    
    hint = "<h5 style='color: red;'> Enter a Username </h5>";
    if(user_name == ""){
        document.getElementById("hint").innerHTML = hint;
        console.log("no username");

    }else{
        window.location = "chatter_room.html";
        document.getElementById("hint").innerHTML = "";
    }
   
}
