const livro = {
    titulo: "Historia sem fim",
    autor: "Paulo Passos",
    anoPublicacao: 2000,
    genero: "Fantasia",
    avaliacao: null,
};

const anoAtual = new Date().getFullYear();

livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(livro["titulo"]);
console.log(livro["autor"]);
console.log(livro["anoPublicacao"]);
console.log(livro["genero"]);

livro.avaliacao = 5;

function exibirLivro(objeto) {
    console.log(objeto);
}

exibirLivro(livro);

livro.genero = "Aventura";

exibirLivro(livro)