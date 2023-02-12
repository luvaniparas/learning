const cars = ["volvo","bmw","tata"];

console.log("****************************************************");
console.log("Check Is Array => ");
console.log("Array.isArray :: ",Array.isArray(cars));
console.log("****************************************************");

console.log("length of array => ");
console.log("length :: ",cars.length);
console.log("****************************************************");

console.log("Sort Array");
console.log(cars.sort());
console.log("****************************************************");

console.log("Array toString() ");
console.log(cars.toString());
console.log("****************************************************");

console.log("Array join() ");
console.log(cars.join("*"));
console.log("****************************************************");

console.log("Array Splice() ");
console.log(cars.splice(1,0,"mahindra"));
console.log(cars);
console.log("****************************************************");

console.log("Array Slice() ");
console.log(cars.slice(1));
console.log("****************************************************");

console.log("iterate through array => ");
console.log("1) forEach loop => ");
cars.forEach((car,index) => {
    console.log(index,"::",car);
})


console.log("2) for loop with async await => ");
async function printCar(car){
    setTimeout(() => {
        console.log(car);
    },"1000");
}


async function iterateThroughLoop(){
    for(let index=0; index < cars.length; index++){
        await printCar(cars[index]);
    }
}

iterateThroughLoop();
console.log("****************************************************");





