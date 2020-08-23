function rolldice(){

    return  Math.floor(Math.random() * 6) + 1;
}
var random1 = rolldice();
var random2 = rolldice();
document.getElementsByClassName("img1")[0].src = "images/dice"+random1+".png";
document.getElementsByClassName("img2")[0].src = "images/dice"+random2+".png";

if (random1 > random2){
    document.querySelector("h1").innerHTML = "Player1 won"
}else if(random2 > random1){
    document.querySelector("h1").innerHTML = "Player2 won"
}else{
    document.querySelector("h1").innerHTML = "There was a draw"
}
