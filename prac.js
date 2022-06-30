//JavaScript classes
class Fruits{
  constructor(name, quantity){
    this.name = name;
    this.quantity = quantity;
  }
  isHealthy(){
    return `${this.name} is good for health!`;
  }
  isWater(){
    return true;
  }
}

const fruit1  = new Fruits("Apple", 6);
console.log(fruit1);
console.log(fruit1.isHealthy());
console.log(fruit1.isWater());

class Vegitables extends Fruits{
  isVeggi(){
    return `${this.name} is a vegitable`;
  }
}
const vegii1 = new Vegitables("Tomato", 12);
console.log(vegii1);
console.log(vegii1.isVeggi());
