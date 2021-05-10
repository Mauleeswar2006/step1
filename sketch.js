var  database, playerCount = 0, gameState = 0,form,player,game;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
game = new Game();
game.getState()
game.start();

form = new Form();
form.display();

player = new Player();
player.getCount();

  
}

function draw(){
  background("white");
  
    
  
}
