class PaperBall {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          density:1.2,
          friction : 0.5
      }
      this.body = Bodies.circle(x, y,radius,options);
    this.radius=10;
    this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
    ellipseMode(RADIUS);

      fill("yellow");
      imageMode(CENTER);
      image(this.image,0, 0,70,70);
      pop();
    }
}