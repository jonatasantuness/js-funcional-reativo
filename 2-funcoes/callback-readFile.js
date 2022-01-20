const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'leitura-teste.txt')

fs.readFile(caminhoArquivo, (err, content) => {
  console.log(content.toString())
})