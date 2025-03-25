const pessoa = {
    nome: "Nome da pessoa",
    idade: 30,
    solteiro: true,
    hobbies: ["ler", "viajar", "cozinhar"]
};

const calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => {
        if (b === 0) {
            return "Erro: divisão por zero não é permitida.";
        }
        return a / b;
    }
};

function exibirDados(pessoa){
    console.log(pessoa);
}

exibirDados(pessoa);

pessoa.endereco = {
     rua: 'Rua Dona Clotilde',
     numero: '71',
     complemento: ''
}

pessoa.hobbies.push("jogar videogame");
pessoa.hobbies.push("assistir séries");

const listaHobbies = pessoa.hobbies.filter(hobby => hobby === 'ler');
console.log(listaHobbies);

exibirDados(pessoa);

function calculadoraTeste(a, b, objetoCalculadora){
    return objetoCalculadora['soma'](a, b);
}

console.log(calculadoraTeste(2, 3, calculadora));