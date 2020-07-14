class Inimigo extends Animacao{
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    
    this.velocidade = velocidade;
    this.x = width;
  }
  
  invisivel(){
    return this.x < -this.largura;
  }
  
  move(){
    if( this.invisivel() ){
      this.x = width;
    }
    this.x -= this.velocidade;
  }
    
}