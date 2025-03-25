const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  media: 7.5,
  estaAprovado: function(mediaBase){
    return this.media >= mediaBase ? 'Aprovado' : 'Reprovado';
  }
}

console.log(estudante.estaAprovado(6.5));