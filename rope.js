class rope{
    constructor(body1,body2,x,y){
        this.x = x,
        this.y = y;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.x, y:this.y},
            stiffness: 0.04,
            length: 10
        }
       // this.sling1 = loadImage('sprites/sling1.png');
       // this.sling2 = loadImage('sprites/sling2.png');
        //this.sling3 = loadImage('sprites/sling3.png');
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    //attach(body){
      //  this.rope.bodyA = body;
    //}
    
    //fly(){
       // this.sling.bodyA = null;
    //}

    display(){
       // image(this.sling1,200,20);
       // image(this.sling2,170,20);
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;
            push();

            strokeWeight(4);

            var Anchor1x = pointA.x
            var Anchor1y = pointA.y

            var Anchor2x = pointB.x + this.x 
            var Anchor2y = pointB.y + this.y
            
            line(Anchor1x,Anchor1y,Anchor2x,Anchor2y)
            
            pop();
        
    }
    
}