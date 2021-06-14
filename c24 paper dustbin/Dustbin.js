class Dustbin {
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            'restitution':0,
            'friction':1,
            'density': 0.1
        }
        this.body = Bodies.rectamgle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World .add(world,this.body);
    }
    display() {
        rectMode(CENTER);
        fill ("voilet");
        rect(this.body.position.y,this.width,this.height);
    }
}