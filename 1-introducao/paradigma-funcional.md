# Paradigma Funcional

A programação Funcional é o processo de desenvolvimento de software de forma declarativa através de composição de funções puras, evitando compartilhamento de estados, dados mutáveis e efeitos colaterais. Essa definição foi feita por *Eric Elliot* e é uma das melhores definições do que é o paradigma funcional.

Este paradigma demorou para ser adotado no mercado devido à um contexto histórico, onde o grande culpado é a memória.

A programação funcional foi criada em 1957, antes ainda da Programação Estruturada e da Programção Orientada a Objetos, porém na época a memória era muito custosa para que fosse viável utilizar essa abordagem.

## First Class Functions

Na programação Funcional as funções cumprem um papel muito importante, elas também são tratadas como valores e esse conceito é chamado de *First Class Functions*.

Como funções são valores, então podemos atribuir uma função à uma variável, no exemplo abaixo temos uma função anônima sendo atribuída à uma variável, ou seja, uma *Expressão de Função*:

```jsx
const dobro = function(x) {
  return x * 2
}

dobro(5) // 10
```

## High Order Functions

Na matemática, as High Order Functions (*Funções de Primeira Ordem*), são funções que trabalham sobre outras funções, elas podem receber funções como parâmetro ou retorná-las.

```js
const calculate = function(fn, x, y) {
  return fn(x, y)
}
```

## Composição de Funções

Como podemos tratar função como valor, isso nos permite criar composição de funções, abordaremos isso comm mais profundidade adiante, porém neste exemplo podemos ver como uma função de composição pode conter outras funções:

```js
const exagerado = composicao(
  gritar, // É uma função
  enfatizar // É uma função
)

exagerado('Pare com isso!')
```

## Imutabilidade

Neste exemplo, temos uma lista de alunos e queremos obter apenas os alunos aprovados (que possuem nota maior ou igual à 6).

Em um paradigma Procedural/Imperativo fariamos da seguinte forma:

```js
const alunos = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 8.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const aprovados = []

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 6) {
    aprovados.push(alunos[i])
  }
}

console.log(aprovados) // Jonatas, Maria, Lara
```

Nesta forma o código possui mutabilidade, porque apesar da variável ```alunos``` ser uma constante, o seu valor está sendo modificado a cada iteração, além de sua forma de escrita ser muito imperativa, dizendo ao computador o passo a passo para executar uma tarefa.

```js
const alunos = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 8.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const aprovados = []

for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].nota >= 6) {
    aprovados.push(alunos[i])
  }
}

console.log(aprovados) // Jonatas, Maria, Lara
```

Para escrever esse código de forma mais Funcional/Declarativa podemos fazer da seguinte forma:

```js
const alunos = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 8.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const isApproved = (aluno) => aluno.nota >= 6

const aprovados = alunos.filter(isApproved)

console.log(aprovados) // Jonatas, Maria, Lara
```

Observe que neste caso, ao invés de criarmos um array de alunos vazio para que o mesmo contenha os alunos aprovados, dessa vez estamos criando uma função que contém a lógica necessária para obter os alunos, ou seja, estamos dizendo ao computador o que deve ser feito, e não como exatamente.

A Função ```filter()``` receberá a função que contém a lógica de negócio como argumento, o que torna o código mais legível.

Como já vimos anteriormente, o motivo pelo qual o paradigma funcional teve uma adoçao tardia é por causa da memória, que antigamente era algo muito custoso e não era viável trabalhar com dados imutáveis, ou seja, não era viável por exemplo clonar um array e gerar uma nova versão filtrada como novos elementos, como fizemos com a constante ```alunos```.

Um dos mecanismos que foram criados devido ao custo da memória, foi o conceito de **Valor x Referência**.

Quando criamos uma váriavel com valor primitivo, o computador cria um espaço na memória reservado para ele, e mesmo que outra variável seja criada com o mesmo valor, ou receba como atribuição a primeira variável, ainda assim será criada outro espaço em memória, ao invés de aproveitar o mesmo espaço, isso porque dados primitivos não são muito custosos:

```java
int a = 3 // criou um espaço em memória
int b = a // criou um espaço em memória
int c; // criou um espaço em memória
```
Neste exemplo se a variável ```a``` for modificada, a variável ```b``` não será impactada, porém quando lidamos com objetos, as coisas mudam, isso porque objetos podem ser muito maiores e mais custosos, assim como uma lista de alunos, então neste caso se criarmos uma variável ```a``` com uma lista de alunos e atribuirmos essa variável à uma outra variável ```b```, a variável ```b``` terá uma referência ao mesmo espaço de memória de ```a```, ao invés de criar um novo espaço.

```js
const a = [
  { nome: 'Jonatas', nota: 9.0 },
  { nome: 'Fernando', nota: 4.5 },
  { nome: 'Maria', nota: 8.0 },
  { nome: 'Gabriel', nota: 5.0 },
  { nome: 'Lara', nota: 6.0 }
]

const b = a // Valor passado como referência, ou seja, "b" está apontando para o mesmo espaço de memória de "a"
```
A vantagem de duas variáveis distintas apontarem para o mesmo local de memória, é a econômia no consumo de memória e a desvantagem é que quando possuímos várias variáveis apontando para o mesmo local, a chance de bagunçar esses dados e gerar problemas é grande.