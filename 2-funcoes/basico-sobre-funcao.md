# Básico sobre Função

Como a função é o a protagonista do paradigma funcional, vamos recordar alguns conceitos básicos.

## Declaração de Função x Expressão de Função

Para declarar uma função é necessário utilizr a keyword ```function``` seguido de um nome de função:

```js
function hello() {
  return 'Bom dia!'
}

console.log(hello()) // 'Bom dia!'
```

Como as funções são considerados [Objetos de Primeira Classe](../1-introducao/paradigma-funcional.md), então podemos utilizá-las como valor, e com isso criar expressões de função, que são funções atribuídas à variáveis, geralmente como funções anônimas:

```js
const hello = () => 'Bom dia!'

console.log(hello()) // 'Bom dia!'
```

## Argumentos no JavaScript

O JavaScript tem uma flexibilidade grande em relação à outras linguagens quanto a passagem de parâmetros.

Se uma função função for definida com 2 parâmetros, mas na chamada forem passados mais argumentos, então a função irá executar normalmente ignorando os argumentos extras.

```js
function somar(a, b) {
  return a + b
}

somar(3,2) // 5

somar(3,2,6,9,7) // 5
```

Se for passado menos argumentos, então o JavaScript irá considerar o argumento faltante como ```undefined```, e neste caso, como estamos tentando somar 2 números, ele retornará ```NaN``` (*Not a Number*), que representa um erro matemático:

```js
function somar(a, b) {
  return a + b
}

somar(3) // NaN
```

Para evitar isso, podemos utilizar o sinal de atribuição ```=``` nos parâmetros para definir um parâmetro padrão:

```js
function somar(a, b = 0) {
  return a + b
}

somar(3) // 3
```

## Funções como parâmetro

Como podemos utilizar funções como valores, logo, podemos passar uma função como parâmetro para outra função, neste exemplo temos uma função para saudação que irá receber uma outra função com uma saudação específica como argumento, e depois de validada se realmente é uma função irá executá-la:

```js
const boaNoite = () => 'Boa noite!!'

function executarSaudacao(saudacao) {
  if (typeof saudacao === 'function') {
    return saudacao()
  }
}

console.log(executarSaudacao(boaNoite)) // Boa noite!!
```

## Função como retorno de função

Este exemplo é um pouco mais complexo, agora temos uma função que tem como objetivo realizar potenciação, porém, a princípio essa função só irá receber um parâmetro com o expoente da potência e retornará uma segunda função anônima, que receberá como argumento a base da potência (número que será elevado à alguma potência).

Para isso funcionar primeiro precisamos armazenar o retorno da função ```potencia()``` em alguma variável, repare que aqui só estamos passando um parâmetro que representa o ```expoente```, e se exibirmos a variável no console veremos que o retorno dela é a função anônima que está esperando o argumento da ```base```, ou seja, o trabalho ainda não foi finalizado, nós só preparamos o terreno.

A variável ```elevadoAoQuadrado``` está apenas armazenando a função anônima que faz o cálculo da potência já com o valor do expoente pré estabelecido.

Quando executamos a função ```elevadoAoQuadrado(8)``` estamos passando o argumento ```base``` para a função calcular a potência com o expoente que já havia sido definido na variável ```elevadoAoQuadrado```.

```js
function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp)
  }
}

const elevadoAoQuadrado = potencia(2)

console.log(typeof elevadoAoQuadrado) // 'function'

console.log(elevadoAoQuadrado(8)) // 64
```

Uma outra maneira menos elegante de obter esse mesmo resultado, mas que também funciona, é simplesmente executar funções encadeadas, passando os parâmetros necessários da função externa para a função interna, ou seja, passando primeiro o argumento ```expoente``` e depois a ```base```:

```js
function potencia(exp) {
  return function (base) {
    return Math.pow(base, exp)
  }
}

console.log(potencia(2)(8)) // 256
```
Neste outro exemplo, temos uma função que exibe uma mensagem para alguém específico:

```js
function mensagem(nome) {
  return function (frase) {
    return frase + ' ' + nome + '!!'
  }
}

const mensagemParaJonatas = mensagem('Jonatas')

console.log(mensagemParaJonatas('Seja bem vindo')) // Seja bem vindo Jonatas!!

console.log(mensagem('Carlos')('Bom dia! Olá')) // Bom dia! Olá Carlos!!
```

## Arrows Functions

A arrow function é uma função obrigatoriamente anônima, e ela geralmente funciona como uma expressão de função, ou seja, armazenada em uma variável.

```js
const arrowExample = () => {
  return 'Sou uma Arrow Function!'
}

console.log(arrowExample()) // 'Sou uma Arrow Function!'
```

Quando o retorno dessa função for apenas uma expressão, podemos colocá-la em uma única linha, remover as chaves e a keyword ```return```, que agora funcionará de forma implícita:

```js
const arrowExampleExp = () => 'Sou uma Arrow Function simplificada!'

console.log(arrowExampleExp()) // 'Sou uma Arrow Function simplificada!'
```

Se a função tiver apenas um parâmetro podemos remover os parênteses:

```js
const myName = name => `Meu nome é ${name}!`

console.log(myName('Jonatas')) // Meu nome é Jonatas!
```

O mesmo exemplo que usamos de anteriomente para criar uma função de potência que retorna uma outra função, pode ser escrito de forma mais enxuta com arrow functions:

```js
const potenciaArrow = exp => base => Math.pow(base, exp)

const elevadoAoQuadradoArrow = potenciaArrow(2)

console.log(elevadoAoQuadradoArrow(8)) // 64
```