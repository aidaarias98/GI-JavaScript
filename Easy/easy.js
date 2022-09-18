//easy challenge:

//creating two variables 
const fName11 = "Ai";
const fName22 = "Ni";


 //checking which one is longer or shorter with a function
const longOrShort= function (name1,name2) {
    
    if (name1.length > name2.length) {
         //actually checking if name1 is greater than name2
        console.log (`The name ${name1} is longer than ${name2} by ${name1.length-name2.length} characters.`);
        //actually checking if name1 is grea than name2
    } else if (name1.length < name2.length){
        console.log(`The name ${name2} is longer than ${name1} by ${name2.length-name1.length} characters.`);
    } else{
        console.log(`${name1} and ${name2} have the same amount of characters.`)
    }

};

// //actually calling the function to work
longOrShort(fName11,fName22);