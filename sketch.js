const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var drops = [];
var maxDrops = 10;
var rand, manBody, thund1, thund2, thund3, thund4;

function preload()
{
    

    thund1 = loadImage("thunderbolt/1.png");
    thund2 = loadImage("thunderbolt/2.png");
    thund3 = loadImage("thunderbolt/3.png");
    thund4 = loadImage("thunderbolt/4.png");
}

function setup()
{
    createCanvas(600,650);

    engine = Engine.create();
    world = engine.world;

    manBody = new Umbrella(300, 360, 50);
       
    ground = Bodies.rectangle(width/2, 400, width, 20);
    World.add(world, ground);
    
    
        for(var i=0; i<maxDrops; i++)
        {
            drops.push(new drop(random(0,600), random(-50, 0)));
        }   
    

    Engine.run(engine);
}

function draw()
{
    Engine.update(engine);
    background(0);

    

    
    rand = Math.round(random(1,4));
    if(frameCount%150===0)
    {
        thunder = createSprite(random(10,600), random(10,50), 10, 10);
        switch(rand)
        {
            case 1: thunder.addImage("f", thund1);
            break;
            case 2: thunder.addImage("g", thund2);
            break;
            case 3: thunder.addImage("k", thund3);
            break;
            case 4: thunder.addImage("j", thund4);
            break;
            default: break;
        }
        thunder.scale = random(0.3, 0.6);
        thunder.lifetime = 5;
    }

    
    for(var i=0; i<maxDrops; i++)
    {
        drops[i].display();
        drops[i].repeat();
    }
    
    manBody.display();

    drawSprites()
}   

