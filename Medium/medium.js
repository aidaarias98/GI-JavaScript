//medium challenge

//initial prompt 
const input=prompt ("What do you want to say?");

if (input == input.toUpperCase()){
    //checks if input is uppercase only
    alert("The user is yelling");
}else if (input == input.toLowerCase()){
    //checks if input is lowercase only
    alert("The user is whispering");
} else{
    //the results of both upper and lower case
    alert("The user is talking normally");
}
