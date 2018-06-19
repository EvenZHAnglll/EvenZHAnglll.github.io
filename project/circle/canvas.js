var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.beginPath();
c.rect(0,0,innerWidth,innerHeight);
c.fillstyle='rgb(100,100,100)';
c.fill();

function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
		// c.strokeStyle = 'blue';
		// c.stroke();
		c.fillStyle = 'rgba(100,120,120,0.4)';
		c.fill();
		c.closePath();
	}
	this.update = function(){
		if (this.x + this.radius >innerWidth  || this.x-this.radius<0){
		this.dx = -this.dx;
		}
		if (this.y + this.radius >innerHeight  || this.y-this.radius<0){
			this.dy = -this.dy;
		}
		this.x += this.dx;
		this.y += this.dy;

		this.draw();
	}

}

var circleArray =[];

for (var i =0; i<15; i++){
	var radius =Math.random()*250+30;
	var x= Math.random()*(innerWidth - radius*2)+radius;
	var y= Math.random()*(innerHeight - radius*2)+radius;
	var dx = (Math.random() -0.5);
	var dy = (Math.random() -0.5);

	circleArray.push(new Circle(x,y,dx,dy,radius));
	// var circle =new Circle(200,200,3,3,30);
}


var circle = new Circle(200,200,3,3,30);
circle.draw();



function animate() {
	requestAnimationFrame(animate);

	c.clearRect(0,0,innerWidth,innerHeight);
	c.beginPath();
	c.rect(0,0,innerWidth,innerHeight);
	c.fillstyle='rgba(0,0,50,1)';
	c.fill();
	c.closePath();
	for (var i =0; i<circleArray.length; i++){
		circleArray[i].update();
	}

	
}

animate();