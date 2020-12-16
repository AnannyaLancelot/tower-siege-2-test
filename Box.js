class Box{
    constructor(x,y,width,height){
        var options={
            isStatic:false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.Visiblity=this.Visiblity;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<2){
        var pos=this.body.position;
        fill("red")
        rect(pos.x,pos.y,this.width,this.height)
        rectMode(CENTER);
        }else{
            World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     rect(pos.x,pos.y,this.width,this.height)
     pop();
        }
       
        
    }
}