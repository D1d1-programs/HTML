function validate (e){
    e.preventDefault;
    var email1 = document.getElementById("email").value ;
    var password1 = document.getElementById("pass1").value;
    var age1 = document.getElementById("age").value;
    var msg1 = document.getElementById("message")
    var message1;
} 
if (email1 === "") {
    message1 = "Email had to be entered";
    msg1.style.color = 'red'
}
else if (password1 === "") {
    message1 = "password1 had to be entered ";
    msg1.style.style.color = 'red'
}
else if (age1 === "") {
    message1 = "age1 had to be entered ";
    msg1.style.style.color = 'red'
}
else{
    message1 = "login sucessful";
    msg1.style.color = 'green'
}
msg1.innerHTML=message1;