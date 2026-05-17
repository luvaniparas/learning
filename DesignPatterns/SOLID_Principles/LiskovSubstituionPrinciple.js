class RectAngle{
    constructor(width, height){
        this.width = width;
        this.height = height;
        
        console.log(`width :: ${width}, height :: ${height} `)
    }
    
    setWidth(width){
        this.width = width;
    }
    
    setHeight(height){
        this.height = height;
    }
    
    getWidth(width){
        this.width = width;
    }
    
    getHeight(height){
        this.height = height;
    }
    
    calculateArea(){
        return this.width * this.height;
    }
}

class Square extends RectAngle{
    constructor(size){
        super(size, size);
    }
    
    setWidth(w){
        this.width = this.height = w;
    }
}

const square = new Square(10);
const area = square.calculateArea();

console.log("Area is :: ",area);