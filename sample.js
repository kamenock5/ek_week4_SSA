function sample() {

var selection = prompt("Please enter your selection ( Rock, Paper, or Scissors): ");

var computer = Math.floor(Math.random() * 3);

switch (selection.toLowerCase()){

 case "rock":
   
     if (compter === 1)
     {
	alert("You are the winner");
	
     }

     break;

 case "paper":

     if (computer === 2)
     {
	alert("You are the winner");
	
     }

     break;

 case "scissor":

     if (computer === 3)
     {
	alert("You are the winner");
	
     }

     break;

 default:
        alert("Check your selection and re-enter again");
        break;
 
 }
}


