function setup() {
  createCanvas(windowWidth, windowHeight);
  
  frameRate(30);//30
  //somDoJogo.loop();
  jogo = new Jogo();
  telaInicial = new TelaInicial();
  botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
  jogo.setup();
  
  cenas = {
    jogo,
    telaInicial
  };
}

function keyPressed(){
  jogo.keyPressed();
}

function draw() {
  cenas[cenaAtual].draw();
}