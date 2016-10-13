var blackPieces = 12;
var redPieces = 12;
var selected = true;
var oldX;
var oldY;
//if turn is ture, the its blacks turn; if false red. 
var turn = true;
var player="X";
var jump = false;
var selectedX;
var selectedY;



/* Takes in x y coordinates
To move update x,y and select the old x,y and make it blank
*/


function move(x, y){

//checks whos turn it is
playerTurn()

if(selected == true){

  document.getElementById("b"+x+y).style.background='#00ff00'; 

showMoves(x,y)

selected = false;

} else {

var selectedX = x
var selectedY = y

    //movePiece(selectedX,selectedY)
    //document.getElementById("b"+selectedX+selectedY).style.background="#ffffff";
   // showMoves(selectedX,selectedY)

       //  if(document.getElementById("b"+selectedX+selectedY).style.background != "#00ff00"){
        //window.alert("nah bruh")


if(player == "X" && (( selectedX == oldX+1) || (selectedX == oldX-1)) && (selectedY = oldY+1) ) {
    document.getElementById("b"+selectedX+selectedY).value =player;
    document.getElementById("b"+oldX+oldY).value = " ";
    //Deselects X
    document.getElementById("b"+oldX+oldY).style.background="#000000"
    document.getElementById("b"+selectedX+selectedY).style.background="#000000"
    document.getElementById("b"+(selectedX+1)+(selectedY+1)).style.background="#000000"
    document.getElementById("b"+(selectedX-1)+(selectedY+1)).style.background="#000000"
    document.getElementById("b"+(oldX+1)+(oldY+1)).style.background="#000000"
    document.getElementById("b"+(oldX-1)+(oldY+1)).style.background="#000000"
     document.getElementById('turn_keeper').innerHTML = "O's turn"

    player = "Y"
    turn = false;
} else {
      //  window.alert("Illegal move");

        //Deselects O
   document.getElementById("b"+oldX+oldY).style.background="#000000"
  // if(document.getElementById("b"+selectedX+selectedY).style.background !== "#00ff00"){
if(player == "O" && (( selectedX == oldX+1) || (selectedX == oldX-1)) && (selectedY = oldY-1) ) {

   document.getElementById("b"+selectedX+selectedY).value =player;
    document.getElementById("b"+oldX+oldY).value = " ";
    document.getElementById("b"+selectedX+selectedY).style.background="#000000"
    document.getElementById("b"+(selectedX-1)+(selectedY-1)).style.background="#000000"
    document.getElementById("b"+(selectedX+1)+(selectedY-1)).style.background="#000000"
    document.getElementById("b"+(oldX-1)+(oldY-1)).style.background="#000000"
    document.getElementById("b"+(oldX+1)+(oldY-1)).style.background="#000000"
     document.getElementById('turn_keeper').innerHTML = "X's turn"

 


turn = true;

player = "X"
}

   document.getElementById("b"+oldX+oldY).style.background="#000000"
    document.getElementById("b"+selectedX+selectedY).style.background="#000000"
    document.getElementById("b"+(selectedX+1)+(selectedY+1)).style.background="#000000"
    document.getElementById("b"+(selectedX-1)+(selectedY+1)).style.background="#000000"
    document.getElementById("b"+(oldX+1)+(oldY+1)).style.background="#000000"
    document.getElementById("b"+(oldX-1)+(oldY+1)).style.background="#000000"
   document.getElementById("b"+selectedX+selectedY).style.background="#000000"
    document.getElementById("b"+(selectedX-1)+(selectedY-1)).style.background="#000000"
    document.getElementById("b"+(selectedX+1)+(selectedY-1)).style.background="#000000"
    document.getElementById("b"+(oldX-1)+(oldY-1)).style.background="#000000"
    document.getElementById("b"+(oldX+1)+(oldY-1)).style.background="#000000"
     //document.getElementById('turn_keeper').innerHTML = "X's turn"
//turn = true;


}    
    selected = true;
}

oldX = x;
oldY = y;

}


//Governs the players turns
function playerTurn(){

if(turn == true){
    player = "X"

} else{

    player = "O"
}


}

/*must be greater then x and y-1 or y+1
  if x or O = 0 || 8 then  'x'+ 1
*/
function showMoves(x,y){

if(player =="O"){

    //Checks for legal O moves
    document.getElementById("b"+x+y).style.background="#00ff00"
    document.getElementById("b"+(x-1)+(y-1)).style.background="#00ff00"
    document.getElementById("b"+(x+1)+(y-1)).style.background="#00ff00"

} else{
    // Checks for legal X moves
    document.getElementById("b"+x+y).style.background="#00ff00"
    document.getElementById("b"+(x+1)+(y+1)).style.background="#00ff00"
    document.getElementById("b"+(x-1)+(y+1)).style.background="#00ff00"
}

return true;

}




function pieceTaken(x,y){


} 
