// Ler dados com Promise

const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
  return new Promise(resolve => {
    fs.readFile(caminho, (err, data) => {
      resolve(data.toString())
    })
  })
}

const caminho = path.join(__dirname, 'leitura-teste.txt')

lerArquivo(caminho).then(console.log)
