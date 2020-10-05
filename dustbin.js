class dustbin {
    constructor(x,y){

        this.x = x;
        this.y = y;
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.dustbinThickness = 30;
        this.angle = 0;

        this.bottomRect = Bodies.rectangle(this.x, this.y,this.dustbinWidth,this.dustbinThickness, {isStatic:true})
        this.leftRect=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
        Matter.Body.setAngle(this.leftRect, this.angle);
        this.rightRect=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightRect, -1*this.angle);
        
        World.add(world, this.bottomRect)
		World.add(world, this.leftRect)
		World.add(world, this.rightRect);
    }

    display(){
        var posBottom=this.bottomRect.position;
			var posLeft=this.leftRect.position;
			var posRight=this.rightRect.position;

			

			push()
			translate(posLeft.x, posLeft.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			stroke(255)
			rotate(this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posRight.x, posRight.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rotate(-1*this.angle)
			rect(0,0,this.wallThickness, this.dustbinHeight);
			pop()

			push()
			translate(posBottom.x, posBottom.y);
			rectMode(CENTER)
			//strokeWeight(4);
			stroke(255)
			angleMode(RADIANS)
			fill(255)
			rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
			
	}

}