const person = {
    name : "paras",
    age : 24,
    status : "single"
}

const human = {...person,profession:"Software Developer"};
console.log("Human => ",JSON.stringify(human));


const numbers = [1,2,3,4];
const newNumbers = [...numbers,5,6];
console.log("newNumbers => ",JSON.stringify(newNumbers));

function printPerson(name,status,age){
    console.log(name);
    console.log(status);
    console.log(age);
}

function sum (x,y,z){
    console.log(x+y+z);
}

sum(...numbers);

//printPerson.apply(null, ...person);

