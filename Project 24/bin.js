class DustBin{
    constructor(x,y,width,height){
        var options= {
            isStatic:true
        }
        //this.image = loadImage("dustbingreen.png");
        
        this.body = Bodies.rectangle(x,y,width,height,options);

        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        World.add(world,this.body);
       
    }
    display(){
        var pos =this.body.position;
        //var angle = this.body.angle;
         push();
         translate(pos.x, pos.y);
         rectMode(CENTER);
         fill("red");
         imageMode(CENTER);
         image(this.image,0,-this.dustBinHeight/2)
         rect(0, 0, this.width, this.height);
         pop();

    }






}