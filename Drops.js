class drop{
    constructor(x,y)
    {
        var opt={
            isStatic: false,
            density: 0.01,
            friction: 0.1,
            restitution: 0.1,
        }

        this.radius = 3;
        this.body = Bodies.circle(x,y,this.radius,opt);
        World.add(world, this.body);
    }

    repeat()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body, {x: random(0,600), y: random(-50, 0)});
        }
    }

    display()
    {
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        fill("blue");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius*2, this.radius*2);
        pop();

        
    }
}