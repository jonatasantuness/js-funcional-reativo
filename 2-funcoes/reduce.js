// reduce

const carrinho = [
  { nome: 'Iphone SE', preco: 1200 },
  { nome: 'Carregador de Iphone', preco: 250 },
  { nome: 'Capinha de Iphone', preco: 25 },
  { nome: 'Adaptador HDMI', preco: 150  }
]

const getPrecoTotal = (acumulado, produto) => acumulado + produto.preco

const precoTotal = carrinho.reduce(getPrecoTotal, 0)

console.log(precoTotal)

// Sem valor inicial

const numeros = [1, 2, 3, 4]

const numerosMultiplicados = numeros.reduce((acumulado, numero) => {
  return acumulado * numero
})

console.log(numerosMultiplicados)

// Por dentro do reduce

Array.prototype.meuReduce = function (cb, inicial) {
  let acumlador = inicial

  for (let i = 0; i < this.length; i++) {
    if (!acumlador && i === 0) {
      acc = this[i]
    } else {
      acc = cb(acc, this[i], i, this)
    }
  }

  return acc
}

const dadosNome = ['Elis', 'Regina', 'Carvalho']

const nomeCompleto = dadosNome.meuReduce((acumulador, nome, index) => {
  return `${acumulador} ${nome}`
}, '')

console.log(nomeCompleto)