

var x =function(a) { return a;}
var x = a => a;
console.log(x("Hi"));


var x = () => {console.log("Hi");};

var x = function(a,b,c) => a+b+c;
var x = (a,b,c) => a+b+c;
x(2,5,1)

setTimeout(function(){alert("2 seconds passed");},2000);
setTimeout( () => alert("2 seconds passed"), 2000);
setTimeout( () => { alert("2 seconds passed") }, 2000);