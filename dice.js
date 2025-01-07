//For first dice
var r1 =Math.random();
r1=Math.floor((r1*6))+1;

var SrcPathImg1="dice"+r1+".png";

var selectImg1=document.querySelector(".img1");
selectImg1.setAttribute("src", SrcPathImg1);

//For second dice
var r2=Math.floor((Math.random()*6)+1);
var ScrPathImg2="dice"+r2+".png";
var selectImg2=document.querySelectorAll("img")[1];
selectImg2.setAttribute("src",ScrPathImg2);

//For winner
if(r1>r2){
    document.querySelector("h1").textContent="Player1 Wins !!";
}
else if(r2>r1){
    document.querySelector("h1").textContent="Player2 Wins !!";
}
else{
    document.querySelector("h1").textContent="It's a Draw";
}


 

