//getting the time

var today = new Date();
var hours = today.getHours();
var minutes = today.getMinutes();


//setting the functions

const sHand = document.querySelector('#seconds')
const mHand = document.querySelector('#minutes')
const hHand = document.querySelector('#hours');


function rotateS(time){
	sHand.style.transform=`rotate(${time*6+90}deg)`;
	
	
}

for (let i=1; i < hHand; i++) {
	expression
}

function rotateM(time){
	mHand.style.transform=`rotate(${time*6+90}deg)`;
}

function rotateH(time){
	hHand.style.transform=`rotate(${time*30+90}deg)`;
}

function rotation(){
	var today = new Date();
	let seconds = today.getSeconds();
	var minutes = today.getMinutes();	
	var hours = today.getHours();
	hours=hours%12+minutes/60;
	rotateS(seconds);
	rotateM(minutes);
	rotateH(hours);
}

setInterval(rotation, 1000);
