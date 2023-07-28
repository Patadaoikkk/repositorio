class pessoa{

}
class motor{
    constructor(p){
        console.log("Construtor do motor rodando...");
        this.potenciadomeumotor =p;
    }
}
class carro{
    acelerar(){
        console.log("vruummm")
    }
}
let mbasicao = new motor(2);
let c =new carro();
c.acelerar();



