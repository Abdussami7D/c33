class Snow{
	constructor(x,y,r)
	{
		var options={
			isStatic : false,
			restitution : 0,
            friction : 1,
            density : 1.2
			}
		this.x = x;
		this.y = y;
		this.r = r;
		this.image = loadImage("snow1.jpg");
		this.body = Bodies.circle(this.x, this.y,r, options);
		World.add(world, this.body);
	}

	
	display()
	{
		var StonePos=this.body.position;	
		push()
		translate(StonePos.x, StonePos.y);
		rotate(this.body.angle)
		imageMode(CENTER);
		ellipseMode(CENTER);
		image(this.image, 0,0,this.r*2, this.r*2)
		pop()
 }
}