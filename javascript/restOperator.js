const numbers = [1,2,3,4];

function printNumbers(num1,...restNumbers){
    console.log(num1);
    console.log(restNumbers);
}

printNumbers(...numbers);
