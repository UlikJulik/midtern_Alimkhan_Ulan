    var user = document.getElementById("user");
    var pass = document.getElementById("pass");

    function check(){
        var user = document.getElementById("user").value;
        var pass = document.getElementById("pass").value;
        if(user == "admin@gmail.com" && pass == "cisco"){
            console.log(user)
            console.log(pass)

            console.log("Добро пожаловать admin")
        } 
        else{
            console.log(user)
            console.log(pass)
            console.log("Адрес электронной почты или пароль не правильный.")
        }
    }