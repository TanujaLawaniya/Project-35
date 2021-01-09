//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;

function preload(){
  //load images here

  dogImage1=loadImage("images/dogImg.png");
  dogImage2=loadImage("images/dogImg1.png");  
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500, 500);

  foodStock=database.ref('food');
  foodStock.on("value",readStock());

}

function draw() { 
  background(46, 139, 87); 

  

  drawSprites();
  //add styles here

}





