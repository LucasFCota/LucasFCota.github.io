class Vida{
  constructor(total, inicial){
    this.total = total;
    this.inicial = inicial;
    this.vidas = inicial;
  }
  
  draw(){
    for(let i = 0; i < this.vidas; i++){
      const margem = i * 45;
      image(imagemVida, 10 + margem, 20, 40, 40);
    }
  }
  
  ganhaVida(){
    if(this.vidas < this.total) this.vidas++;
  }
  
  perdeVida(){
    this.vidas--;
  }
}