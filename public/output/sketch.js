let potato;
let state =5;
let count = 5;
  
let x;
let speedx = 5;

function preload(){
potato = loadImage('potato.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=width/2;
}

function draw() {
  background(134,211,226);
  imageMode(CENTER);
  textAlign(CENTER);
  fill(255);
  textSize(width/20);
  if(state ==0){
  waitToStart()  
     }
  if(state ==1){
     countdown();
     }
  if(state ==2){
     playing();
    if (keyIsPressed === true) {
    if(key === ' '){
    state = 3;
       }
  }
  }
  if(state ==3){
     pause();
     }
  if(state == 4){
     loser()
     }
   if(state == 5){
     winner()
     }
}

function waitToStart(){
text("MOODY POTATO",width/2,height/4);
text("waiting for other players...",width/2,height/2);
  if(mouseIsPressed){
     state =1;  
     }

}

function countdown(){
  textSize(width/5);
  if(count >0){
    text(count,width/2,height/1.7);
     if (frameCount % 60 == 0){
     count--;
     }
     }else{
     state =2;
     }  
}

function playing(){ 
if(x>=(width/2)+20 || x<= (width/2)-20){
speedx = -speedx;
}  
x += speedx;
image(potato,x,height/2,width/4,width/4);
textSize(width/40);
text('press SPACEBAR to pass the moody potato!',width/2,height/4);  
}

function pause(){
tint(255, 10);
image(potato,width/2,height/2,width/4,width/4);
}

function loser(){
textSize(width/10);
text("MOODY POTATO",width/2,height/4);
image(potato,width/2,height/2,width/4,width/4); 
textSize(width/20);  
text("The moody potato is with you !",width/2,height/1.3);
text("It's time to answer the question",width/2,(height/1.3)+50);
}

function winner(){
textSize(width/10);
text("MOODY POTATO",width/2,height/4);
textSize(width/20); 
text("Congrats !",width/2,height/1.5);
text("The popato is with someone else",width/2,(height/1.5)+50);
}