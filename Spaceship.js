class Spaceship{
    constructor(x,y,width,height){
        var options = {
            // 'restitution' : 0.9,
            // 'friction' : 0.9,
            isStatic: true 
        }
    // this.image= loadImage("snow5.webp");
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height
    World.add (world,this.body);
    }

    display(){
        push();
        
        var pos = this.body.position;
        fill("blue");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    pop();
    }
}
