# reduce

O método ```Array.reduce()``` é um método de Array que tem como objetivo "reduzir" o array à uma única informação. ou seja, para cada item do array ele executa uma função de callback e no final retorna apenas um dado que pode ser qualquer coisa, um número, uma string, um objeto, uma tag HTML5 em texto, etc.

A função de callback no ```reduce()```, também é chamada de "**reducer**", e ela recebe 4 parâmetros:

- Acumulador
- Valor Atual
- Index Atual
- Array original

Além do método ```reduce()``` receber a função de callback reducer, ele também pode receber um segundo parâmetro opcional, que representa o valor inicial para o argumento "acumulador" do reducer, se nenhum valor for fornecido, o valor inicial será o primeiro elemento do array.

No exemplo abaixo temos uma lista de carrinho de compras com alguns produtos, e vamos utilizar o ```reduce()``` para obter o preço total, ou seja, a partir de um array, teremos o retorno de um resultado único, neste caso em número:

```js
const carrinho = [
  { nome: 'Iphone SE', preco: 1200 },
  { nome: 'Carregador de Iphone', preco: 250 },
  { nome: 'Capinha de Iphone', preco: 25 },
  { nome: 'Adaptador HDMI', preco: 150  }
]

const getPrecoTotal = (acumulado, produto) => acumulado + produto.preco

const precoTotal = carrinho.reduce(getPrecoTotal, 0)

console.log(precoTotal) // 1625
```

> Atenção! O argumento "**Acumulador**" não representa o item do array que está sendo iterado, e sim o valor atual do retorno que está sendo acumulado, neste exemplo, como queremos obter um número que é o preço total, o valor inicial do acumulador deve ser ```0``` (*senão seria literalmente o primeiro objeto do array e isso causaria um erro de concatenação*), e a cada iteração ele vai sendo somado com os preços dos produtos, é importante definir uma valor inicial aqui para que possamos somar os números e não concatená-los.

Neste outro exemplo temos um array de números e uma função que vai simplesmente multiplicar eles, neste caso, não podemos inserir ```0``` como uma valor inicial, isso porque se multiplicarmos qualquer número por 0 dará 0 e isso vai interferir na conta, então podemos deixar esse argumento vazio e o primeiro número da lista será considerado como valor inicial:

```js
const numeros = [1, 2, 3, 4]

const numerosMultiplicados = numeros.reduce((acumulado, numero) => {
  return acumulado * numero
})

console.log(numerosMultiplicados) // 24
```

## Por dentro do reduce

Array.prototype