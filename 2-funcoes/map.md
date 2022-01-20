# map

O método _```Array.prototype.map()``` é um método de Array que executa uma função de callback para cada elemento do Array, o seu retorno é um novo array com o mesmo length do array original.

```js
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
```

## Por dentro do map

Para entender como o método ```Array.map()``` funciona por debaixo dos panos, podemos criar o nosso próprio método de map customizado, para isso utilizaremos a keyword ```prototype``` para atrelar esse novo método ao objeto global ```Array```.

> Neste caso não pode ser uma arrow function justamente porque precisaremos utilizar o ```this``` para obter o próprio array dentro desse método.

Este novo método chamado ```meuMap()```, receberá os mesmo argumentos que o ```Array.map()``` original recebe, que são: o item atual, o índice do item atual e o próprio array.

```js
Array.prototype.meuMap = function (callback) {
  // cria um novo array para o retorno.
  const mappedArray = []

  // Itera pelos itens do array passado por parâmetro e executa a função de callback para cada item, o resultado de cada item é adicionando ao array criado para o retorno.
  for (let i = 0; i < this.length; i++) {
    mappedArray.push(callback(this[i], i, this))
  }

  return mappedArray
}
```

Então podemos chamar esse método da mesma forma que chamariamos um map convencional:

```js
const atletas  = [
  { nome: 'Jonatas', sobrenome: 'Antunes', esporte: 'skate' },
  { nome: 'Ronaldo', sobrenome: 'Nazário', esporte: 'futebol' },
  { nome: 'Daiane', sobrenome: 'Santos', esporte: 'ginástica' }
]

const atletasMapeados = atletas.meuMap((atleta, index, atletas) => {
  return `${atleta.nome} ${atleta.sobrenome} pratica ${atleta.esporte}!`
})

console.table(atletasMapeados)
```