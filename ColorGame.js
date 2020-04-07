var numsqure=6;
var colors=[];
var random;
var game={};
var heading=document.querySelector("h1");
var mode=document.querySelectorAll(".mode");
var squares=document.querySelectorAll(".square");
var message=document.getElementById("message");
var display=document.querySelector("#special");
var renew=document.getElementById("reset");
game.init=function(){
setupMode();
setupUI();
reset();
}
game.init();

function setupUI(){
	for(var i=0;i<squares.length;i++){
	squares[i].addEventListener("click",function() {
		if(this.style.backgroundColor==random){
		     changeColor(random);
             message.textContent="Correct!";
             renew.textContent="Play Again?";
             heading.style.backgroundColor=random;
		}
		else{
			this.style.backgroundColor="#232323";
			message.textContent="Try Again!";
		}
	});
}
}
function setupMode(){
	for(var i=0;i<mode.length;i++){
mode[i].addEventListener("click",function() {
	mode[0].classList.remove("selected");
	mode[1].classList.remove("selected");
this.classList.add("selected");
this.textContent==="Easy"?numsqure=3:numsqure=6;
reset();
}
);
}
}
function reset(){
	heading.style.backgroundColor="steelblue";
	message.textContent="";
	renew.textContent="New Colors"
	colors=generateRandom(numsqure);
random=colors[pickcolor()];
display.textContent=random;
for(var i=0;i<squares.length;i++){
	if(colors[i])
	{
		squares[i].style.display="block";
squares[i].style.backgroundColor=colors[i];
}
else{
	squares[i].style.display="none";
}
}
}
function changeColor(color){
   for(var i=0;i<squares.length;i++){
   	squares[i].style.backgroundColor=color;
   }
}
function generateRandom(num){
	var arr=[];
for(var i=0;i<num;i++){
	var r=Math.floor(Math.random()*255+1);
	var g=Math.floor(Math.random()*255+1);
    var b=Math.floor(Math.random()*255+1);
    arr.push("rgb("+r +", "+g+", "+b+")");
}
return arr;
}
function pickcolor()
{
  return Math.floor((Math.random()*colors.length));
}
renew.addEventListener("click",function() {
reset();
});
