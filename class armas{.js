class armas{
    constructor(nome,precisao,dano,alcance){
        this.nome = nome;
        this.precisao = precisao;
        this.dano = dano;
        this.alcance = alcance;
    }
}
class detalhes{
    mostradetalhes(arm){
        console.log("nome: "+arm.nome);
        console.log("precisao: "+arm.precisao+"%");
        console.log("dano: "+arm.dano);
        console.log("alcance: "+arm.alcance+"m");
    }
}
let awm = new armas("awm",100,120,1000);
let m4 = new armas("m4" , 80 ,35 , 300);
let phantom = new armas("phantom" , 90 ,25 , 500)

let a = new detalhes;

a.mostradetalhes(awm);
a.mostradetalhes(m4);
a.mostradetalhes(phantom);
