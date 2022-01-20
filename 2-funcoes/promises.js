// Promises

const promessaHelloWorld = new Promise((resolve, reject) => {
  // resolve('Hello World!')
  reject('A operação falhou =/')
})

promessaHelloWorld
  .then(value => {
    console.log(value)
  })
  .catch(rejectValue => {
    console.log(rejectValue)
  })

// Testando o resolve

Promise.resolve('Jonatas')
  .then(nome => nome.toUpperCase())
  .then(console.log)

// Testando o reject

Promise.reject('Jonatas')
  .catch(err => console.log('reject executado!'))

// Lançando um erro durante a composição

Promise.resolve('Jonatas')
  .then(nome => nome.toUpperCase())
  .then(result => { throw new Error() })
  .catch(err => console.log('A composição teve algum erro e ele capturado'))

// Composição com then()

const alunos = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 7.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const getAlunos = new Promise((resolve, reject) => {
  resolve(alunos)
})

const alunosAprovados = alunos => alunos.filter(aluno => aluno.nota >= 6)

getAlunos
  .then(alunos => alunosAprovados(alunos))
  .then(console.table)