// Create a reference for the canvas

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{document.getElementById("d1").innerHTML="This is an alphabet key"//write a code to check the type of key pressed
		}
		if(keyPressed >=48 && keyPressed<=57)
		{document.getElementById("d1").innerHTML="This is a number key"//write a code to check the type of key pressed
		}
		if(keyPressed >76 && keyPressed<=40)
		{document.getElementById("d1").innerHTML="This is an arrow key"//write a code to check the type of key pressed
		}
		if(keyPressed ==17)
		{document.getElementById("d1").innerHTML="This is a special key"//write a code to check the type of key pressed
		}
		if(keyPressed ==18)
		{document.getElementById("d1").innerHTML="This is a special key"//write a code to check the type of key pressed
		}
		if(keyPressed ==27)
		{document.getElementById("d1").innerHTML="This is a special key"//write a code to check the type of key pressed
		}


function alphabetkey()
{	console.log("alphabetkey")
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
{
	context.drawImage("arrkey.png",200,200,200,200)
}

	//upload respective image with the message. 

}
function numberkey()
{	keyPressed=e.keyCode
    console.log("numberkey")
    if((keyPressed >=48 && keyPressed <=57))
{context.drawImage("numkey.png",200,200,200,200)
}

function arrowkey()
{	console.log("arrowkey")
    if(keyPressed==17)
	context.drawImage("arrkey.png",200,200,200,200)
}
function specialkey()
{	console.log("specialkey")
	if(keyPressed=='17,18,27')
	context.drawImage("spkey.png",200,200,200,200)
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
