class Drops {
    constructor(x,y,radius) {
      var options = {
          //isStatic: false,
          restitution:1,
          friction:0.1
      }

      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      translate(pos.x,pos.y)
      rotate(this.body.angle)
      fill("blue");
      ellipse(0,0,this.radius);
     pop();
    }
  };