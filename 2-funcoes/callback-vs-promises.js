// Callback

/* setTimeout(() => {
  console.log('Executando callback: 1')

  setTimeout(() => {
    console.log('Executando callback: 2')

    setTimeout(() => {
      console.log('Executando callback: 3')
    }, 3000)
  }, 2000)
}, 1000) */

// Promise

function esperarPor(tempo = 1000) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(`Executando promise: ${tempo / 1000}`)
      resolve()
    }, tempo)
  })
}

esperarPor(1000).then(esperarPor(2000)).then(esperarPor(3000))
