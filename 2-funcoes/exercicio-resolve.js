const gerarNumeroAleatorio = (min, max) => {
  return new Promise(resolve => {
    const fator = max - min + 1
    const aleatorio = parseInt(Math.random() * fator) + min

    resolve(aleatorio)
  })
}

const exibirFrase = num => `O numero sorteado foi ${num}!`

gerarNumeroAleatorio(1, 100).then(num => console.log(exibirFrase(num)))
