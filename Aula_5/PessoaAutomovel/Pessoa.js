class pessoa {
    codigo;
    nome;
    automoveis = [];
    constructor(_codigo, _nome, _automoveis) {
        this.codigo = _codigo;
        this.nome = _nome;
        this.automoveis = _automoveis[0];
    }
    get codigo() {
        return this.codigo;
    }
    inserirAutomovel(automovel) {
        this.automoveis.push(automovel);
    }
    removerAutomovel(automovel) {
        this.automoveis.pop(automovel);
    }
    getAutomovel() {
        return this.automoveis;
    }
    imprimir() {
        console.log(`Código: ${this.codigo} - Nome: ${this.nome} - Automóveis: ${this.automoveis}`);
    }
    
}
