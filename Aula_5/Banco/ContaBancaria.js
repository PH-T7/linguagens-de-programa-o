class ContaBancaria{
    #saldo = 0;
   
    constructor(valorinicial){
        this.saldo = valorinicial
    }

    depositar(valor = 0){
        this.saldo += valor;
    }

    sacar(valor){
        if(Valor<= this.saldo){
            this.saldo-=valor;
            console.log("Saldo insuficiente.");
        }
    }

    get saldo(){
        return this.saldo
    }

}