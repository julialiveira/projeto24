class Plane {
    constructor(x,y,r) {
      var options = {
        'restitution':1.0,
        'friction':1.0,
          'density':1
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world, this.body);
      this.image=loadImage("aviao.png");
    }
    
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };