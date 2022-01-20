// Filter

const alunos = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 7.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const isApproved = aluno => aluno.nota >= 6

const aprovados = alunos.filter(isApproved)

console.table(aprovados)

// Combinando filter com map

const getNome = aluno => aluno.nome

const nomeAprovados = alunos
  .filter(isApproved)
  .map(getNome)

console.table(nomeAprovados)

// Por dentro do filter

Array.prototype.meuFilter = function (cb) {
  const arrayFiltrado = []

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      arrayFiltrado.push(this[i])
    }
  }

  return arrayFiltrado
}

const isFailed = aluno => aluno.nota < 6

const alunosReprovados = alunos.meuFilter(isFailed)

console.table(alunosReprovados)