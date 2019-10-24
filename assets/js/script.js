

for(var i=1; i<=100; i++){
  var precedente = document.getElementById("lista").innerHTML;
  console.log(precedente);
  if(i%3!=0 && i%5 !=0) {
    document.getElementById("lista").innerHTML = precedente + "<li>" + i + "</li>";
  } else if (i%5 == 0 && i%3 == 0){
    document.getElementById("lista").innerHTML = precedente + "<li>" + "FizzBuzz" + "</li>";
  } else if (i%3 == 0){
    document.getElementById("lista").innerHTML = precedente + "<li>" + "Fizz" + "</li>";
  } else if (i%5 == 0){
    document.getElementById("lista").innerHTML = precedente + "<li>" + "Buzz" + "</li>";
  } 

}