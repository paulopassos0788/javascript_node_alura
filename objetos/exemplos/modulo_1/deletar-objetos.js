const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20",
 aliado: {
   nome: "Saruman",
   classe: "mago"
 },
 status: "desaparecido"
}

delete objPersonagem.aliado;
delete objPersonagem["status"]
const delPropInexistente = delete objPersonagem["endereco"] // nao retorna false, pois a propriedade nao existe
console.log(delPropInexistente);
console.log(objPersonagem);