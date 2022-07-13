class Rubber{
	constructor(x,y,width,height)
	{
		var options={
			'restitution':0.3,
        	'friction':5,
       	 	'density':1
		}
	// assign options to the rubber ball
		this.body = Bodies.rectangle(x, y,width,height,options);
     	this.width = width;
      	this.height = height;
		this.image=loadImage("borracha.png");
		
		
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("blue");
			//draw the ellipse here to display the rubber ball
			rect(0, 0, this.width, this.height);
			pop()
	}

}