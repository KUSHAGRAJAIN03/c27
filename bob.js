class bob {
    constructor(x,y) {
      var options = {
        isStatic:false,
		restitution:1,
		friction:0,
    density:0.5
      }
      this.body = Bodies.circle(x,y,35,options,0);

      //this.img=loadImage("images/paper.png");
      
      World.add(world, this.body);
    }
    display(){
      
      push();
     // var radius=this.body.radius;
      
     // console.log(this.body);
     // rect(this.body.position.x,this.body.position.y);

     ellipseMode(RADIUS);
     fill("yellow");

     ellipse(this.body.position.x,this.body.position.y,35);

      pop();
    }
  }
  