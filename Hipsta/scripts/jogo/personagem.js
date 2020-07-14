class Personagem extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.variacaoY = variacaoY;
    this.yInicial = height - this.altura - variacaoY;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
    this.pulos = 0;
    this.invensivel = false;
  }
  
  pula(){
    if(this.pulos < 2){
      this.velocidadeDoPulo = -30;
      this.pulos++;
    }
  }
  
  aplicaGravidade(){
    this.y += this.velocidadeDoPulo;
    this.velocidadeDoPulo += this.gravidade; 
    if(this.y >= this.yInicial){
      this.y = this.yInicial;
      this.pulos = 0;
    }
  }
  
  tornarInvencivel(){
    this.invencivel = true;
    setTimeout(() => {
      this.invencivel = false;
    }, 1000);
  }
  
  estaColidindo(inimigo){
    if(this.invencivel) return false;
    
    const precisao = 0.6;
    const colisao = collideCircleCircle(
      this.x + this.largura/2,
      this.y + this.altura/2,
      this.largura * precisao,
      inimigo.x + inimigo.largura/2,
      inimigo.y + inimigo.altura/2,
      inimigo.altura * precisao);
    
    return colisao;
  }
}