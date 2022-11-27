window.onload=function() {
	document.getElementById("Mydiv").addEventListener("mouseover", Catch)
}

function Catch(){
	var x = Math.random() * ( window.innerHeight - this.offsetHeight)
	var y = Math.random() * ( window.innerWidth - this.offsetWidth)
	this.style.top = x + "px";
	this.style.left= y + "px";
}