// Map

const funcionarios = [
  { nome: 'Joao', salario: 3000 },
  { nome: 'Maria', salario: 2500 },
  { nome: 'Fernando', salario: 1750 }
]

const aumentoDe5 = funcionario => {
  return {
    nome: funcionario.nome,
    salario: funcionario.salario * 1.05
  }
}

const salariosAtualizados = funcionarios.map(aumentoDe5)

console.table(salariosAtualizados)

// Por dentro do map

Array.prototype.meuMap = function (callback) {
  // cria um novo array para o retorno.
  const mappedArray = []

  // Itera pelos itens do array passado por parâmetro e executa a função de callback para cada item, o resultado de cada item é adicionando ao array criado para o retorno.
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this))
  }

  return mappedArray
}

const atletas  = [
  { nome: 'Jonatas', sobrenome: 'Antunes', esporte: 'skate' },
  { nome: 'Ronaldo', sobrenome: 'Nazário', esporte: 'futebol' },
  { nome: 'Daiane', sobrenome: 'Santos', esporte: 'ginástica' }
]

const atletasMapeados = atletas.meuMap((atleta, index, atletas) => {
  return `${atleta.nome} ${atleta.sobrenome} pratica ${atleta.esporte}!`
})

console.table(atletasMapeados)