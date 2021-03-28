// Your code here

class Polygon{
    constructor(sides) {
        this.sides = sides
        this.count = this.sides.length
    }
    get countSides(){
        return this.count
    }
    get perimeter(){
        const add = (accum, currentValue) => accum + currentValue
        return this.sides.reduce(add, 0)
    }   
}

class Triangle extends Polygon{
    get isValid(){
        if(this.sides.length === 3){
			if(this.sides[0]+this.sides[1]>this.sides[2]&&this.sides[0]+this.sides[2]>this.sides[1]&&this.sides[1]+this.sides[2]>this.sides[0]){
				return true
           }
       }
       return false
    }
}

class Square extends Polygon {
    get isValid(){
        if(this.sides.length === 4) {
            if(this.sides[0]==this.sides[1]&&this.sides[1]==this.sides[2]&&this.sides[2]==this.sides[3]){
				return true
        }
    }
    return false
}
    get area() {
        return this.sides[0] * this.sides[1]
    }
}