function rest(){
  
  my_Interval = setInterval(keep_time,1000)
}

var timer = 10
numbers = []
increment = 0
total = 0
top_number = parseInt(prompt("Pick a number of how reps you think you can do in one set. We will do that many sets subtracting one rep each set until we reach zero reps.......10 second breaks in between ;)"))
set_number = 0
numbers.push(top_number)
let sum = 0;
let sum2 = 0;
var tracking = 10

for (let i=0;i<45;i++){
  next_number = top_number -= 1
//   this condition doesnt allow negative numbers to be appended to list
  if (next_number > 0){
    numbers.push(next_number)
  }
  
}

console.log(numbers)

for (let i=0;i<numbers.length;i++){
    sum += numbers[i];
}

alert("You will be doing " + sum + " reps if you finish your sets!!! \nDo " + numbers[set_number] + " Reps now then hit rest button to rest!" );


document.getElementById("timer_button").innerHTML = "0"




function keep_time(){
  
  timer -= 1
document.getElementById("timer_button").innerHTML = timer
// if timer is less than 1 take every number in list up to set number and combine them in sum2 for getting reps amount
  if (timer < 1){
    clearInterval(my_Interval)
    set_number += 1
    for (let i=increment;i<set_number;i++){
    sum2 += numbers[i];
    increment += 1
}
      // if set number of list is greater than 0 (not on last rep?) show amounts and reset Timer
if (numbers[set_number] > 0){
  alert("you finished set number " + set_number + "." +  "\nSo far you have done a total of " + sum2 + " reps" + "\n\nDo " + numbers[set_number] + " Reps now then hit rest button for your rest" )
  timer = 10
  // if set number of list is less than 0
}else{
  alert("congrats you did all of your sets: " + set_number + "\n" + " and this many reps: " + " " + sum2)
  // clearInterval(my_Interval)
};
    
  }


}
