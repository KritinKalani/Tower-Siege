class Block{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            friction: 1,
            density: 1.2,
            restitution: 0.4
        }
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(48,29,35);
        rect(pos.x,pos.y,this.width,this.height);
    }
};