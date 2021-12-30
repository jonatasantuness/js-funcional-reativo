// Declaração de Função

function hello() {
  return 'Bom dia!'
}

console.log(hello())

// Expressão de Função

const helloExpression = () => 'Bom dia!'

console.log(helloExpression())

// Argumentos

function somar(a, b = 0) {
  return a + b
}

console.log(somar(3, 2))

console.log(somar(3, 2, 6, 9, 7))

console.log(somar(3))

// Funções como parâmetro

const boaNoite = () => 'Boa noite!!'

function executarSaudacao(saudacao) {
  if (typeof saudacao === 'function') {
    return saudacao()
  }
}

console.log(executarSaudacao(boaNoite))

// Função como retorno de função

function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp)
  }
}

const elevadoAoQuadrado = potencia(2)

console.log(typeof elevadoAoQuadrado)

console.log(elevadoAoQuadrado(8))

console.log(potencia(2)(8))


function mensagem(nome) {
  return function (frase) {
    return frase + ' ' + nome + '!!'
  }
}

const mensagemParaJonatas = mensagem('Jonatas')

console.log(mensagemParaJonatas('Seja bem vindo'))

console.log(mensagem('Carlos')('Bom dia! Olá'))

// Arrow Functions

const arrowExample = () => {
  return 'Sou uma Arrow Function!'
}

console.log(arrowExample())

const arrowExampleExp = () => 'Sou uma Arrow Function simplificada!'

console.log(arrowExampleExp())

const myName = name => `Meu nome é ${name}!`

console.log(myName('Jonatas'))

const potenciaArrow = exp => base => Math.pow(base, exp)

const elevadoAoQuadradoArrow = potenciaArrow(2)

console.log(elevadoAoQuadradoArrow(8))