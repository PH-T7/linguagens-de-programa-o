class Pessoa{
    #Nome
    #CPF

    constructor(_Nome,_CPF){
        this.#Nome = _Nome;
        this.#CPF = _CPF;
    }

    imprimir(){
        console.log(`nome> ${this._Nome} - idade: ${this._CPF}`);
    }

}