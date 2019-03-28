var canvas = document.querySelector('canvas');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
c.beginPath();
c.rect(0,0,innerWidth,innerHeight);
c.fillstyle='rgb(100,100,100)';
c.fill();



function showTime(){
	var today = new Date(); 
	c.font='bolder 150px "Microsoft Yahei"';
	c.fillStyle = 'rgba(255,255,255,0.7)';
	c.shadowBlur=15;
	c.shadowColor='rgba(0,0,0,0.6)';
	c.shadowOffsetX=3;
	c.shadowOffsetY=3;
	if(today.getMinutes()<10){
	c.fillText((today.getHours()+":0"+today.getMinutes()),innerWidth/2,innerHeight/2); 
	}
	else{
	c.fillText((today.getHours()+":"+today.getMinutes()),innerWidth/2,innerHeight/2); 	
	}
	// console.log(today.getHours()+":"+today.getMinutes());
}
function Circle(x,y,dx,dy,radius){
	this.x = x;
	this.y = y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;

	this.draw = function(){
		c.beginPath();
		c.shadowBlur=20;
		c.shadowColor='rgba(0,0,0,0.3)';
		c.shadowOffsetX=(innerWidth/2-this.x)/25;
		c.shadowOffsetY=(innerHeight/2-this.y)/25;
		//c.shadowOffsetX=0;
		//c.shadowOffsetY=0;
		c.shadowOffsetX=6;
		c.shadowOffsetY=6;
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
		// c.strokeStyle = 'blue';
		// c.stroke();
		c.fillStyle = 'rgba(150,180,180,0.8)';
		// rgba 100 120 120 0.4
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
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	c.clearRect(0,0,innerWidth,innerHeight);
	c.shadowColor="white";

	//c.fillstyle='rgba(0,0,50,1)';
	c.fillStyle = 'rgba(100,120,120,0.4)';
	c.fillRect(0,0,innerWidth,innerHeight);
	

	for (var i =0; i<circleArray.length; i++){
		circleArray[i].update();
	}

	showTime();

	
}

animate();