let cor;
let posicaohorizontal;
let posicaovertical;
let posicaohorizontal12;
let posicaovertical12;

function setup() {
  createCanvas(400, 400);
  background("pink");
  cor = color(random(0,255),random(0,255),random(0,255))


posicaohorizontal = 0;
posicaovertical = random(height)
posicaohorizontal12 = 0;
posicaovertical12 = random(height)
 } 


function draw() {
  fill(cor)
  circle(posicaohorizontal,posicaovertical,50);
  circle(posicaohorizontal12,posicaovertical12,50);
 posicaohorizontal+=random(1,4)
 posicaovertical+=random(-3,3);
   posicaohorizontal12+=random(0,3)
  posicaovertical12+=random(-3,3)
  
  if(mouseIsPressed){
    cor = color(random(0,255),random(0,255),random(0,255),random(0,100));
  }
  
  
                          
                        
}