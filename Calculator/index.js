var n = 10
var divs = 
document.getElementsByClassName("numbers");
for(var i = 3; i < divs.length; i++){
  // console.log(divs[i].children[0])
  divs[i].addEventListener('click', function (event) { 
    console.log(event.target.className)
    
    if (event.target.className == "txt"){
      var clicked_number = event.target.innerHTML
   var box_number = document.getElementById('text') ;
    
box_number.innerHTML = box_number.innerHTML + clicked_number
    }
    if (event.target.className == "numbers"){
      var clicked_number = event.target.children[0].innerHTML
   var box_number = document.getElementById('text') ;
    
box_number.innerHTML = box_number.innerHTML + clicked_number
    }
   
 });
  
}


document.getElementById('square').addEventListener('click', function (event) {  document.getElementById('text').innerHTML = 0
 });
