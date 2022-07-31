function esperarPor(segundos = 2000) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, segundos)
  })
}

esperarPor(2000)
  .then(() => console.log('Executando promise 1...'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 2...'))
  .then(esperarPor)
  .then(() => console.log('Executando promise 3...'))
  .then(esperarPor)

async function executar() {
  await esperarPor(2000)
}
