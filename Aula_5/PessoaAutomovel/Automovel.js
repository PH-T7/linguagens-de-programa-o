class Automovel {
    #codigo = 0;
    #marca = '';
    #modelo = '';
    nome = String;
    let = automoveis = [];


    constructor(_codigo, _marca, _modelo) {
    this.#codigo = _codigo;
    this.#marca = _marca;
    this.#modelo = _modelo;
    }

    get codigo() {
    return this.#codigo;
    }

    imprimir() {
    console.log(`Código: ${this.codigo} - Marca: ${this.#marca} - Modelo: ${this.#modelo}`);
    }

    imprimirCompleto() {
        let output = `Código: ${this.codigo} - Marca: ${this.#marca} - Modelo: ${this.#modelo}\n`;
        for (const automovel of this.automoveis) {
            output += automovel.imprimir() + '\n';
        }
        return output;
    }
    
}