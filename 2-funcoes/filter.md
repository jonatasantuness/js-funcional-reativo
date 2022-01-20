# filter

O método _```Array.filter()``` é um método de Array que cria um novo array apenas com os itens que passam um determinado teste implementado pela função de callback.

Diferente de ```map()```, o ```filter()``` pode e normalmente tem como retorno um array com length menor que o original, já que o objetivo dele é justamente filtrar lista com base em uma determinada condição:

```js
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
```

Podemos inclusive combinar os métodos ```filter()``` e ```map()``` para gerar uma novo array somente com o nome dos alunos por exemplo:

```js
const getNome = aluno => aluno.nome

const nomeAprovados = alunos
  .filter(isApproved)
  .map(getNome)

console.table(nomeAprovados)
```

## Por dentro do filter

Para entender como o método ```Array.filter()``` funciona por debaixo dos panos, podemos criar o nosso próprio método de filter customizado, para isso utilizaremos a keyword ```prototype``` para atrelar esse novo método ao objeto global ```Array```.

> Neste caso não pode ser uma arrow function justamente porque precisaremos utilizar o ```this``` para obter o próprio array dentro desse método.

```js
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
```