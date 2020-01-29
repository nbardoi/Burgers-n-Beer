var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "utsabootcamp" && password == "test_123"){
alert ("Login successful!");
window.location = "/add"; // Redirecting to other page.
return true;
}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("login").disabled = true;
return false;
}
}
}