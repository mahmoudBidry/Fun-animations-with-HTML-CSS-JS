document.getElementById("page").onmousemove = function(argument){
	document.getElementById("circle").style.top = argument.pageY +"px";
	document.getElementById("circle").style.left = argument.pageX +"px";
}