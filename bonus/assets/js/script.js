//Function to create list item
function append (value, idList){
  //Create a <li> node
  var node = document.createElement("li");

  //Create a text node 
  var textnode = document.createTextNode(value);

  //Append the text to <li>
  node.appendChild(textnode);

  //Append <li> to List 
  document.getElementById(idList).appendChild(node);
}

//Id of my List
var idList = "lista";

for(var i=1; i<=100; i++){
  if(i%3!=0 && i%5 !=0) {
    append(i,idList);
  } else if (i%5 == 0 && i%3 == 0){
    append("FizzBuzz",idList);
  } else if (i%3 == 0){
    append("Fizz",idList);
  } else if (i%5 == 0){
    append("Buzz",idList);
  } 
}