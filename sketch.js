//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio=diametro/2;

//variáveis raquetes
let raqueteComprimento = 80;
let raqueteAltura = 90;

//variáveis da raquete1
let xRaquete1 = -20;
let yRaquete1 = 150;

//variáveis da raquete2
let xRaquete2 = 540;
let yRaquete2 = 150;
let velocidadeYRaquete2;
let chanceDeErrar = 0;

let colidiu = false;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//placar do jogo
let pontosP1 = 0;
let pontosP2 = 0;

//sons do jogo
let somRaquetada;
let somPonto;
let somTrilha;

let backgroundImg;
let raquete1Img;
let raquete2Img;
let bolaImg;

function preload() {
  somTrilha = loadSound("trilha.mp3");
  somPonto = loadSound("ponto.mp3");
  somRaquetada = loadSound("raquetada.mp3");
  backgroundImg = loadImage("tenis2d.jpg");
  raquete1Img = loadImage("raquete1.png");
  raquete2Img = loadImage("raquete2.png");
  bolaImg = loadImage("bola.png");
}

function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(0);
  image(backgroundImg, 0, 0, width, height);
  //mostraBolinha();
  push();
  translate(xBolinha, yBolinha);
  rotate(radians(frameCount)); // Utilize frameCount ou outra variável para controlar a rotação
  image(bolaImg, -raio, -raio, diametro, diametro);
  pop();
  //image(bolaImg, xBolinha - raio, yBolinha - raio, diametro, diametro);
  movimentoBolinha();
  verificaColisaoBorda();
  image(raquete1Img, xRaquete1, yRaquete1, raqueteComprimento, raqueteAltura);
  image(raquete2Img, xRaquete2, yRaquete2, raqueteComprimento, raqueteAltura);
  //mostraRaquete(xRaquete1, yRaquete1);
  //mostraRaquete(xRaquete2, yRaquete2);
  movimentoRaquete1();
  movimentoRaquete2();
  //verificaColisaoRaquete1();
  colisaoRaqueteBiblioteca(xRaquete1, yRaquete1);
  colisaoRaqueteBiblioteca(xRaquete2, yRaquete2);
  placar();
  pontos();
}

function mostraBolinha(){
  circle(xBolinha,yBolinha, diametro);
}

function mostraRaquete(x,y) {
  rect(x, y, raqueteComprimento, raqueteAltura);
}

function movimentoBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;  
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width || xBolinha - raio <0) {
    velocidadexBolinha *= -1;
  }
  
  if (yBolinha + raio > height || yBolinha - raio <0) {
    velocidadeyBolinha *= -1;
  }
}

function movimentoRaquete1(){
  if(keyIsDown(UP_ARROW)){
    yRaquete1 -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaquete1 += 10;
  }  
  yRaquete1 = constrain(yRaquete1, 0, 400 - raqueteAltura);
}
function movimentoRaquete2() {
  
  //OPÇÃO MULTIPLAYER
  //if(keyIsDown(87)){
  //  yRaquete2 -= 10;
  // }
  //if(keyIsDown(83)){
  //  yRaquete2 += 10;
  //}  
  //yRaquete2 = constrain(yRaquete2, 0, 400 - raqueteAltura);
  //}

  //OPÇÃO BOT

  velocidadeYRaquete2 = yBolinha - yRaquete2 - raqueteComprimento/2-30;
  yRaquete2 += velocidadeYRaquete2 + chanceDeErrar;
  yRaquete2 = constrain(yRaquete2, 0, 400 - raqueteAltura);
  calculaChanceDeErrar();
  }

function calculaChanceDeErrar() {
    if (pontosP2 >= pontosP1) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 39){
    chanceDeErrar = 40
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 35){
    chanceDeErrar = 35
    }
  }
}

function verificaColisaoRaquete1(){
  //limites bolinha
  let esquerdaBolinha = xBolinha - raio;
  let superiorBolinha = yBolinha - raio;
  let inferiorBolinha = yBolinha + raio;
  let direitaBolinha = xBolinha + raio;
  
  //limites raquete
  let direitaRaquete1 = xRaquete1 + raqueteComprimento;
  let superiorRaquete1 = yRaquete1;
  let inferiorRaquete1 = yRaquete1 + raqueteAltura;
  
  if (esquerdaBolinha < direitaRaquete1 && superiorBolinha < inferiorRaquete1 && inferiorBolinha > superiorRaquete1) {
    velocidadexBolinha *= -1;
    somRaquetada.play();
  }
}
function colisaoRaqueteBiblioteca(x,y) {
  colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadexBolinha *= -1;
    somRaquetada.play();
  }
}

function placar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill(255);
  text(pontosP1, 170, 26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill(255);
  text(pontosP2, 470, 26);
}

function pontos() {
  if (xBolinha > 590) {
    pontosP1 +=1;
    somPonto.play();
  }
  if (xBolinha < 10) {
    pontosP2 +=1
    somPonto.play();
  }
}

function bolinhaNaoFicaPresa(){
  if (XBolinha - raio < 0){
  XBolinha = 23
  }
}