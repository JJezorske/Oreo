
//var heading = document.getElementById("heading");
//console.log("This is an elemnt of type: ", heading.nodeType );
//console.log("The inner HTML is", heading.innerHTML );
//console.log("There are this many child objects ", heading.childNodes );

var myLinks = document.getElementsByTagName("a");
console.log(myLinks.length);
var firstLink = myLinks[0].getAttribute("href");
console.log(firstLink);

//document.getElementById("heading").innerHTML = "The most special and wonderful Baby Bunnay on the World Wide Web!"
//var align = heading.getAttribute("align");
//console.log(align);

document.getElementById("para").style.backgroundColor = "white";
document.getElementById("para").setAttribute("style", "font-weight:bold");	//changing element CSS

//document.getElementById("oreoPainting").setAttribute("src","gallery/oreohat.jpg");	//changing element attributes


var para3 = document.createElement("p");
var node = document.createTextNode("Oreo is also now an indoor Bunny, though she used to live in a hutch outside.");
para3.appendChild(node);

var para = document.getElementById("para");
para.appendChild(para3);	//adding elements through JS

//document.getElementById("heading").onclick = function () {alert("SLUBBOO")};
document.getElementById("heading").addEventListener("click", function () {alert("SLUBBOOOO!");});	//event listener function

//function simpleMessage () {
//	alert("You's only little")
//}
//setTimeout(simpleMessage, 3000);		//timed function

/*var myImage = document.getElementById("oreoPainting");

var imageArray = ["oreo.jpeg", "gallery/oreohat.jpg", "gallery/oreohat.jpg", "gallery/oreosunbathe.jpg"]

var imageIndex = 0;

function changeImage () {
	myImage.setAttribute("src", imageArray[imageIndex]);
	imageIndex++;
	if (imageIndex >= imageArray.length) {
		imageIndex = 0;
	}
	
}	*/

//setInterval (changeImage, 4000);
		



