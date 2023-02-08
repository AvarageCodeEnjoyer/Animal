class Animal {
  constructor(legs) {
      this.legs = legs;
  }
  walk() {
      console.log('walking on ' + this.legs + ' legs');
  }
}

class Bird extends Animal {
  constructor(legs) {
      super(legs);
  }
  fly() {
      console.log('flying');
      console.log(this.legs)
  }
}


let bird = new Bird(10);

bird.walk();
bird.fly();
