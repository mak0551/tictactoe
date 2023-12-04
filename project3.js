const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const box7 = document.getElementById("box7");
const box8 = document.getElementById("box8");
const box9 = document.getElementById("box9");
// box1.value="hi";
// box2.value="hi";
alert("hello");
function call(){
if(box1.value==="x" && box2.value==="x" && box3.value==="x"){
alert("player 1 has won");
}
else if(box1.value==="o" && box2.value==="o" && box3.value==="o"){
alert("player 2 has won");
}
else if(box4.value==="x" && box5.value==="x" && box6.value==="x"){
alert("player 1 has won");
}
else if(box4.value==="o" && box5.value==="o" && box6.value==="o"){
alert("player 2 has won");
}
else if(box7.value==="x" && box8.value==="x" && box9.value==="x"){
alert("player 1 has won");
}
else if(box7.value==="o" && box8.value==="o" && box9.value==="o"){
alert("player 2 has won");
}
else if(box1.value==="x" && box4.value==="x" && box7.value==="x"){
alert("player 1 has won");
}
else if(box1.value==="o" && box4.value==="o" && box7.value==="o"){
alert("player 2 has won");
}
else if(box2.value==="x" && box5.value==="x" && box8.value==="x"){
alert("player 1 has won");
}
else if(box2.value==="o" && box5.value==="o" && box8.value==="o"){
alert("player 2 has won");
}
else if(box3.value==="x" && box6.value==="x" && box9.value==="x"){
alert("player 1 has won");
}
else if(box3.value==="o" && box6.value==="o" && box9.value==="o"){
alert("player 2 has won");
}
else if(box1.value==="x" && box5.value==="x" && box9.value==="x"){
alert("player 1 has won");
}
else if(box1.value==="o" && box5.value==="o" && box9.value==="o"){
alert("player 2 has won");
}
else if(box3.value==="x" && box5.value==="x" && box7.value==="x"){
alert("player 1 has won");
}
else if(box3.value==="o" && box5.value==="o" && box7.value==="o"){
alert("player 2 has won");
}
}