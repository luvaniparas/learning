class VegetarianMenu{
    getMenu(){
        return ["Panner this", "Soya that", "Mushroom this & that"];
    }
}

class NonVegetarianMenu{
    getMenu(){
       return ["Chicken this", "Mutton that", "Sea Foods"] 
    }
}

function displayMenu(type, foods){
    console.log(`Type - ${type}`)
    foods.forEach((food) => {
        console.log(` - ${food}`)
    })
}

function main(){
    const vegetarianMenu = new VegetarianMenu();
    const nonVegetarianMenu = new NonVegetarianMenu();
    
    const vegMenu = vegetarianMenu.getMenu();
    const nonVegMenu = nonVegetarianMenu.getMenu();
    
    displayMenu("Veg",vegMenu);
    displayMenu("Non veg",nonVegMenu);
}

main();