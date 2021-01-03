class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            if(pointA.x<220){
                strokeWeight(5);
                stroke(48,22,8);
                line(pointA.x-20, pointA.y, pointB.x-15, pointB.y);
                line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-5);
                image(this.sling3,pointA.x-30,pointA.y-10,10,30)
            }
            else{
            strokeWeight(2);
            stroke(48,22,8);
            line(pointA.x+20, pointA.y, pointB.x-15, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y-5);
            image(this.sling3,pointA.x+20,pointA.y-10,10,30)
            }
            
            pop();
        }



        image(this.sling1,200,225);
        image(this.sling2,175,225);

    }
    
}