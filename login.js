var LogIn = document.getElementById("LogIn");
var SignUp = document.getElementById("SignUp");
var Focus = document.getElementById("Focus");



function signup(){
   SignUp.style.transform = "translateX(0px)";
   LogIn.style.transform = "translateX(0px)";
   Focus.style.transform = "translateX(100px)";
}

function login(){
    SignUp.style.transform = "translateX(300px)";
    LogIn.style.transform = "translateX(300px)";
    Focus.style.transform = "translateX(0px)";
 }