function chanceDeErro(valor, chance) {
  return new Promise((resolve, reject) => {
    if (Math.random() < chance) {
      reject('Ocorreu um erro!')
    } else {
      resolve(valor)
    }
  })
}

chanceDeErro('Testando...', 0.9)
  .then(value => console.log(`Valor: ${value}`))
  .catch(err => console.log(`Erro: ${err}`))
