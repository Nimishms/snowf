class Snowflakes {
    constructor(x,y,width,height,angle) {
var options = {
    restitution:1,
    friction:1,
    density:1
}
this.body = Bodies.rectangle(x,y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("snow4.webp")
        
        World.add(world, this.body);
        World.add(world,this.image);
  
    }
    display() {
        var pos = this.body.position
        var angle = this.body.angle
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
     
      image(this.image,0,0,this.width,this.height)
      pop();
    }
}