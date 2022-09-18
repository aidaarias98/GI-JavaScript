//Very hard Challenge
//Add function
const add = function(num1,num2){
    return num1+num2;
}

//Subtract function
const subtract = function(num1,num2){
    return num1-num2;
}

//Multiply function
const multiply = function(num1,num2){
    return num1*num2;
}

//division function
const divide = function(num1,num2){
    return num1/num2;
}

const number1 = Number(prompt("What is your first number?"));

const number2 = Number(prompt("What is your second number"));

const operator = prompt("what is your operator?")



const checkOperator = function(operator, number1, number2){
    if (operator== "+"){
        return add(number1, number2);
    } else if (operator == "-") {
        return subtract(number1, number2);
    } else if (operator == "*") {
        return multiply(number1, number2);
    } else if (operator == "/") {
        return divide(number1, number2);
    }else {
        alert("Please use a valid operator!");
    }
};

console.log(`${number1} ${operator} ${number2}= ${checkOperator(operator,number1,number2)}`);