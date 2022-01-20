# Callback

No JavaScript as funções podem atuar como *High Order Functions*, ou seja, podendo passar funções como arugmento de outra função, e isso está totalmente relacionado ao termo callback.

O callback é uma função de retorno, no exemplo abaixo temos uma função genérica criada para realizar cálculos matemáticos, essa função vai receber 2 números e uma outra função de callback que será responsável por realizar alguma operação específica assim que ela for solicitada.

Quando chamamos a função genérica ```calcular()``` passamos como argumento a função com a operação matemática que queremos, a função genérica recebe a operação e a executa como retorno:

```js
const calcular = (num1, num2, operacao) => {
  return operacao(num1, num2)
}

const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const dividir = (num1, num2) => num1 / num2
const multiplicar = (num1, num2) => num1 * num2

console.log(calcular(3, 2, somar)) // 5
console.log(calcular(10, 5, subtrair)) // 5
console.log(calcular(25, 5, dividir)) // 5
console.log(calcular(2.5, 2, multiplicar)) // 5
```

Exemplos de uso callback:

- Ler arquivos grandes, você pode incluir uma função de retorno à uma função mais genérica que lê um arquivo grande, como isso pode demorar, você já deixa uma função de retorno para que ela seja executada assim que terminar a leitura do arquivo.
- Pode ser usado também em requisições, executando uma função de retorno somente quando o servidor enviar a resposta.

## setTimeout() e setInterval()

Os métodos ```setTimeout()``` e ```setInterval()``` também trabalham com callbacks, eles recebem como primeiro parâmetro uma função de callback que é executada assim que o intervalo ou tempo de execução é definido, o segundo parâmetro é o tempo em milisegundos.

```js
const startCountdown = (seconds) => {
  let counter = seconds

  console.log('Countdown iniciado!!')

  const interval = setInterval(() => {
    console.log(counter)
    counter--

    if (counter < 0) {
      clearInterval(interval)
      console.log('Countdown Finalizado!!')
    }
  }, 1000)
}

startCountdown(5)
```

```js
const delayMessage = (seconds) => {
  setTimeout(() => {
    console.log(`Função delayMessage() exibindo mensagem após ${seconds}s de delay!`)
  }, seconds * 1000)
}

delayMessage(5)
```

## Lendo arquivos com Node.js

Ler arquivos pode ser um processo demorado, então normalmente o fazemos de forma assíncrona, neste próximo exemplo vamos criar um arquivo ```.js``` novo para ler um um outro arquivo ```.txt```. Para isso precisaremos importar alguns métodos do **Node.js**:

- ```fs()```: É o sistema de arquivos ou "File System", que possui os métodos necessários para ler arquivos.
- ```path()```: Possuí diversos método úteis como o ```path.join()``` para concatenação de strings de path.
- ```__dirname```: É uma constante do **Node.js** que representa o caminho do diretório atual.

> O ```fs()``` possuí 2 métodos para ler arquivos, que são ```readFile()``` e ```readFileSync()```, para este exemplo usaremos o ```readFile()```, justamente porque ele usa função de callback.

```js
const fs = require('fs')
const path = require('path')

const caminhoArquivo = path.join(__dirname, 'leitura-teste.txt')

fs.readFile(caminhoArquivo, (err, content) => {
  console.log(content.toString())
})
```