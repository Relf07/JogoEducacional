
var i = 0
let tela = 0
let y = 150
let opcaomenu = 1
//UPLOAD
let snd
let font
let img
let img2
let img3
let img4
let imgprof
let imgpro
let imgh
let coracao
let covid
let cenario
let cenario2
//CONTROLE DO SPRITE
var img5 = []
var img6 = []
var sujeira = []
var higiene = []
var contador=0;
var tempo = 0;
var xP = 150
var yP = 300
var mode = 1
//CAINDO
var ycaindo
var xcaindo
var caindo = true
var contador1=0;

var ycaindo1
var xcaindo1
var caindo1 = true

var contador2=0;
var ycaindo2
var xcaindo2
var caindo2 = true

//pontos
pontos=0
//vida
var vidas = 4
let num1
let num2


function preload(){
  soundFormats('mp3')
  coracao = loadImage("coracao.png")
  snd = loadSound("bensound-buddy.mp3")
  font = loadFont("PixelDigivolve-mOm9.ttf")
  img = loadImage("Alt Tab.png")
  img2 = loadImage("Instruções.png")
  img3 = loadImage("Créditos.png")
  img4 = loadImage("NOVO.png")
  imgprof = loadImage("Prof.jpeg")
  imgpro = loadImage("Programador .jpeg")
  cenario = loadImage("cenario.png")
  cenario2 = loadImage("cenario2.png")
  //HIGIENE
  higiene[0] = loadImage("banheiro.png")
  higiene[1] = loadImage("alcool-em-gel.png")
  higiene[2] = loadImage("sabonete.png")
  higiene[3] = loadImage("escova de dente.png")
  //SUJEIRA
  sujeira[0] = loadImage("bacteria.png")
  sujeira[1] = loadImage("covid.png")
  sujeira[2] = loadImage("bacteria 2.png")
  sujeira[3] = loadImage("bacteria 3.png")
  
  //ESQUERDA
  img5[0] = loadImage('blueleft.png');
  img5[1] = loadImage('blueleftwalk1.png');
  img5[2] = loadImage('blueleftwalk2.png');
  //DIREITA
  img6[0] = loadImage('blueright.png');
  img6[1] = loadImage('bluerightwalk1.png');
  img6[2] = loadImage('bluerightwalk2.png');
  
}

function setup() {
  createCanvas(400, 400)
 num1=int(random(1,9))
 num2=int(random(1,9))
}

function draw() {

  
    if(tela == 0){
      menu()
    }
    if(tela == 1){
      fase1()
    }
    if(tela == 2){
      instruções()
    }
    if(tela == 3){
      créditos()
    }
   else if(tela==4){
     final()
   }
  else if(tela==5){
    gameover()
  }
  else if(tela==6){
    fase2()
  }
  else if(tela==7){
    fase3()
  }
}

function menu(){
    background(img)
  textSize(30)
  textAlign(CENTER)
  textFont(font)
  
  
   fill(0,255,255)
   rect(120,y,160,30,30)
     
  fill(0)

  text("HigiGamer",205,90)
  textSize(20)
  text("Jogar",200,170)
  text("Instruções",200,220)
  text("Créditos",200,270)
  
    fill(220,220,220)
    rect(2,373,60,25,10)
    textSize(13)
    fill(0)
    text("By Relf",32,390)
    text(" X:"+mouseX+" Y:"+mouseY,50,35)
  }

function vida(){
  if(vidas==4){
    image(coracao,0,25,30,20)
    image(coracao,20,25,30,20)
    image(coracao,40,25,30,20)
    image(coracao,60,25,30,20)
  }
  if(vidas==3){
  image(coracao,20,25,30,20)
  image(coracao,40,25,30,20)
  image(coracao,60,25,30,20)
  }
  if(vidas==2){
    
    image(coracao,40,25,30,20)
    image(coracao,60,25,30,20)
  }
  if(vidas==1){
    image(coracao,60,25,30,20)
  }
  if(vidas==0){
    tela=5
  }
}

function boneco(){
   if(mode == 0){
      image(img6[0],xP,yP,50,50)
      }else{
      
          if(mode == 1)
          {    
            image(img6[contador%3],xP,yP,50,50)
          }
            else
          {
                  if(mode == 2) {
                    image(img5[contador%3],xP,yP,50,50)
                   }
          }
      }
     tempo++
     if(tempo== 5) {
     contador++;
     tempo=0;
  }
  if(keyIsDown(RIGHT_ARROW) && xP<350) {
    xP += 4;
    mode = 1
    
  }else{
    
  if(keyIsDown(LEFT_ARROW)&& xP>5){
    xP -= 4;
    mode = 2
     }else{
    mode = 0
  }
}
}

function fase1(){
  textSize(20)
  textAlign(CENTER)
  background(img4)
  text("FASE 1",200,20)
  
  //SPRITES-------------------------------------------------------
   boneco()
  //CAINDO--------------------------------------------------------
  
  if(caindo==false){
     ycaindo += 2;
  }
  
  if(ycaindo > width){
	caindo = true;
    contador1++
    
  }
  
  if(caindo){
      ycaindo = 15
      xcaindo = random(400)
    caindo = false;
  }
   image(higiene[contador1%4],xcaindo,ycaindo,50,60)
  if(ycaindo>400){
 ycaindo=0
  }
//CAINDO 1-------------------------------------------------------
  
  if(caindo1==false){
     ycaindo1 += 2;
  }
  if(ycaindo1 > width){
	caindo1 = true;
  }
  
  if(caindo1){
      ycaindo1 = 15
      xcaindo1 = random(400)
    caindo1 = false;
  }
  fill(220)
 
  image(sujeira[0],xcaindo1,ycaindo1,50,60)
  
  
  //COLISÃO PONTOS---------------------------------------
  c =dist(xP,yP,xcaindo,ycaindo)
  if(c>0 && c<50){
     caindo=true
    pontos++
    contador1++
  }
  //COLISÃO VIDAS NEGATIVAS--------------------------------
  c =dist(xP,yP,xcaindo1,ycaindo1)
  if(c>0 && c<50){
    caindo1=true
    vidas--
  }

  //PONTOS--------------------------------------------------------
  textSize(15)
  text("pontos: " +pontos,50,20)
  
  if(pontos==50){
    tela=6
    pontos=0
  }
  //VIDAS--------------------------------------------------
   vida()
}

function fase2(){
  textSize(20)
  textAlign(CENTER)
  background(cenario)
  fill(0)
  text("FASE 2",200,20)
  boneco()
  vida()
  //CAINDO HIGIENE------------------------------------------------------
  
  if(caindo==false){
     ycaindo += 3;
  }
  if(ycaindo > width){
	caindo = true;
    contador1++
    vidas-- 
  }
  if(caindo){
      ycaindo = 15
      xcaindo = random(390)
    caindo = false;
  }
   image(higiene[contador1%4],xcaindo,ycaindo,50,60)
  if(ycaindo>400){
 ycaindo=0
  }
  //CAINDO SUJEIRA----------------------------------------
  if(caindo1==false){
     ycaindo1 += 2.5
  }
  if(ycaindo1 > width){
	caindo1 = true;
    contador2++
  }
  if(caindo1){
      ycaindo1 = 15
      xcaindo1 = random(390)
    caindo1 = false;
  }
  fill(220)
  image(sujeira[contador2%4],xcaindo1,ycaindo1,50,60)
  //COLISAO POSITIVA--------------------------------------
   c =dist(xP,yP,xcaindo,ycaindo)
  if(c>0 && c<50){
     caindo=true
    pontos++
    contador1++
  }
  //COLISAO NEGATIVA
   c =dist(xP,yP,xcaindo1,ycaindo1)
  if(c>0 && c<50){
    caindo1=true
    vidas--
  }
  //PONTOS------------------------------------------------
  textSize(15)
  text("pontos: " +pontos,50,20)
  
  if(pontos==60){
    tela=7
    pontos=0
  }
}
function fase3(){
   textSize(20)
  textAlign(CENTER)
  background(cenario2)
  fill(0)
  text("FASE 3",200,20)
  vida()
  //boneco------------------------------------------------
  if(mode == 0){
      image(img6[0],xP,yP,50,50)
      }else{
      
          if(mode == 1)
          {    
            image(img6[contador%3],xP,yP,50,50)
          }
            else
          {
                  if(mode == 2) {
                    image(img5[contador%3],xP,yP,50,50)
                   }
          }
      }
     tempo++
     if(tempo== 3) {
     contador++;
     tempo=0;
  }
  if(keyIsDown(RIGHT_ARROW) && xP<350) {
    xP += 6;
    mode = 1
    
  }else{
    
  if(keyIsDown(LEFT_ARROW)&& xP>5){
    xP -= 6;
    mode = 2
     }else{
    mode = 0
  }
}
  //---------------------------------------------------------
  if(caindo==false){
     ycaindo += 3;
  }
  if(ycaindo > width){
	caindo = true;
    contador1++
    vidas-- 
  }
  if(caindo){
      ycaindo = 15
      xcaindo = random(390)
    caindo = false;
  }
   image(higiene[contador1%4],xcaindo,ycaindo,50,60)
  if(ycaindo>400){
 ycaindo=0
  }
  //CAINDO SUJEIRA----------------------------------------
  if(caindo1==false){
     ycaindo1 += 3;
  }
  if(ycaindo1 > width){
	caindo1 = true;
    contador2++
  }
  if(caindo1){
      ycaindo1 = 15
      xcaindo1 = random(390)
    caindo1 = false;
  }
  fill(220)
  image(sujeira[contador2%4],xcaindo1,ycaindo1,50,60)
  //COLISAO POSITIVA--------------------------------------
   c =dist(xP,yP,xcaindo,ycaindo)
  if(c>0 && c<50){
     caindo=true
    pontos++
    contador1++
  }
  //COLISAO NEGATIVA
   c =dist(xP,yP,xcaindo1,ycaindo1)
  if(c>0 && c<50){
    caindo1=true
    vidas--
  }
  //PONTOS------------------------------------------------
  textSize(15)
  text("pontos: " +pontos,50,20)
  //final-------
  if(pontos==150){
    tela=5
    pontos=0
  }
}


function instruções(){
  textSize(20)
  textAlign(CENTER)
  background(img2)
  
  fill(0)
  text("Instruções...",200,40)
  text("MATÉRIA: CIÊNCIAS - 1 ANO",200,120)
  text("HABILIDADE: EF01CI03 ",200,140)
  textSize(10)
  text("Aqui iremos discutir a necessidade",200,180)
  text("dos hábitos de higiene do corpo",200,190)
  text("para a manuteção da saúde",200,200)
  
  
}

function créditos(){
  
  textAlign(CENTER)
  textSize(14)
  background(img3)
  image(imgprof,50,100,80,80)
  image(imgpro,50,200,80,80)
  
  fill(220,220,220)
  text("Nome: Aquiles Burlamaqui",250,120)
  text("Educador Docente",222,150)
  text("Nome: Felipe Rodrigues Pereira",270,230)
  text("Programador",202,260)
  
}

function gameover(){
  background(220)
  textAlign(CENTER)
  textSize(20)
  fill(0)
  text("você perdeu,tente novamente!!",200,100)
  vidas=4
  pontos=0
}

function keyPressed(){
  
  if(key=="ArrowDown" && y<250){
    y+=50
    opcaomenu++//incremento
  }
  if(key=="ArrowUp" && y>150){
    y-=50
    opcaomenu--//decremento
  }
  if(key=="Enter"){
    tela = opcaomenu
  }
  if(key=="Escape"){
    tela = 0
  }
  if(key=="j"){
    if(!snd.isPlaying()){
    snd.play()
      outputVolume(0.020)
  }else{
    snd.stop()
  }
}
}

function final(){
  background(220)
  textAlign(CENTER)
  textSize(15)
  fill(0)
  text("BOAAAAAAAAAAAAAAAAA",200,100)
  text("Tecle ESCAPE para retornar ao menu inicial",200,150)
  fill(220)
  rect(195,195,40,40)
  fill(0)
  text("ESC",215,220)
  
  
  
}
