const getUserData = Promise.all([
  new Promise(resolve =>
    setTimeout(() => {
      resolve({ nome: 'Jonatas Antunes', email: 'teste@teste.com' })
    }, 1000)
  ),
  new Promise(resolve =>
    setTimeout(() => {
      resolve({ items: ['capinha Iphone X', 'Adesivo Apple'], valor: 150 })
    }, 1500)
  ),
  new Promise(resolve =>
    setTimeout(() => {
      resolve({ itemsDesejados: ['Carregador 65W', 'Adesivo ReactJS'] })
    }, 2000)
  )
])

getUserData.then(console.log)
