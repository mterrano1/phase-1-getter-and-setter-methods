// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius;
    }

    get diameter(){
        return this.radius * 2;
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2;
    }

    get circumference(){
        return 2 * Math.PI * this.radius;
    }

    set circumference(newCircumference){
        this.radius = (newCircumference / Math.PI) / 2;
    }

    get area(){
        return (this.radius * this.radius) * Math.PI;
    }

    set area(newArea){
        this.radius = Math.sqrt(newArea / Math.PI)
    }

}