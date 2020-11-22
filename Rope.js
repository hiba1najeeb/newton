class Rope {

    constructor (bodyA,bodyB,offsetX,offsetY){
        

        var options = {
            bodyA :bodyA,
            bodyB :bodyB,
            length:200

            
 

            
        }
        this.offsetx =offsetX;
this.offsetY =offsetY;
        
this.chain = Constraint.create(options);
World.add (world,this.chain)

    }
display(){
    var pointA = this.chain.bodyA.position
    var  pointB = this.chain.bodyB.position

    strokeWeight(1)
line (pointA.x,pointA.y,pointB.x,pointB.y)
}

}