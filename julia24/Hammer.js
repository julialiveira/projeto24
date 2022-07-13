class Hammer {
  constructor(x,y,width,height)
	{
		var options={
			'restitution':2.0,
        	'friction':1.0,
       	 	'density':1
		}
	// assign options to the rubber ball
		this.body = Bodies.rectangle(x, y,width,height,options);
     	this.width = width;
      	this.height = height;
		
		
		World.add(world, this.body);

	}
	display()
	{
     
			var rubberpos=this.body.position;	
      rubberpos.x=mouseX;
      rubberpos.y=mouseY;	
      var angle=this.body.angle;

			push()
			translate(rubberpos.x, rubberpos.y);
      rotate(angle)
			rectMode(CENTER)
			strokeWeight(4);
			stroke("yellow");
			fill("yellow");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);
			pop()
	}
};
