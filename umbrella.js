class Umbrella{
    constructor(x,y,radius)
    {
        var options ={
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,radius,options);
        World.add(world, this.body);
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.image = loadImage("Walking Frame/walking_4.png")
    }

    display()
    {
       var pos = this.body.position;  
       push()
       imageMode(CENTER);
       image(this.image, 300, 480, 350, 400);
       
       pop()
    }
}