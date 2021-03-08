
var myListItem = document.createElement("li");
var myTextNode = document.createTextNode("Tickles");
myListItem.appendChild(myTextNode)

var favourites = document.getElementById("favourites");
favourites.appendChild(myListItem);

var newItem = document.createElement("li");       // Create a <li> node
var textnode = document.createTextNode("Snoozing");  // Create a text node
newItem.appendChild(textnode);                    // Append the text to <li>

var favourites = document.getElementById("favourites");   // Get the <ul> element to insert a new node
favourites.insertBefore(newItem, favourites.childNodes[0]);  // Insert <li> before the first child of <ul> 

"http://ajax.googleapis.com/ajax/jquery/1.11.3/jquery.min.js"
