let number1 = number(prompt("indique el numero 1"));
let number2 = number(prompt("indique el numero 2"));
let number3 = number(prompt("indique el numero 3"));



if (number1===number2 && number2>numberthree) {
    console.log("Son iguales");
}

else if(number1>number2 && number2>number3){
    console.log(number1, number2, number3);
    console.log(number3, number2, number1);
}

else if(number2>number1 && number1>number3 || number2===number1){
    console.log(number1, number2, number3);
    console.log(number3, number2, number1);
}

else if(number3>number1 && number1>number2 || number3===number1){
    console.log(number1, number2, number3);
    console.log(number3, number2, number1);
}

else if(number1>number2 && number2>number3 || number3===number2){
    console.log(number1, number2, number3);
    console.log(number3, number2, number1);
}

if (number2>number3&&number3>number1) {
    console.log(number2, number3, number1);
    console.log(number1, number2, number3);   
}