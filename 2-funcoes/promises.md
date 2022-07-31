# Promises

A promise é uma feature do JavaScript implementada no ES6 (2015), trata-se de um objeto global do JavaScript que tem como objetivo representar a conclusão de operações assíncronas. Antes das Promises, a abordagem mais utilizada para funções assíncronas era o [callback](./callback.md).

## História

A idéia de promises já existia desde a decada de 70 e basicamente possuia o objetivo de sincronizar a execução de um programa em linguagems de programação concorrentes.

As Promises descrevem um objeto que atua como um proxy para um resultado, que inicialmente é desconhecido, devido a sua computação não ter sido finalizada no momento da chamada.

No JavaScript o conceito de "Promises" fez sua primeira aparição em 2007 em uma biblioteca chamada _MochiKit_, e depois em outras bibliotecas como _Dojo_ e o _jQuery_. Então para padronizar todas as implementações, o _CommonJS_ criou a especificação [Promises/A+](https://promisesaplus.com/) que contém as regras para a definição de Promises.

Nas primeiras versões do _Node.js_, sua runtime já possuia Promises nativamente, porém foram removidas para focar o uso em callbacks. Depois do lançamento do ES6, o _Node.js_ voltou atrás e implementou as Promises novamente, já que as mesmas possuiam uma especificação pela _CommonJS_ e a maioria dos browsers já permitiam o seu uso sem utilizar bibliotecas externas.

## Fluxo Assícrono

O JavaScript é uma linguagem que tem que lidar com diversas chamadas e execuções que não acontecem necessáriamente no momento que o programador executa algum código, podemos pegar como exemplo, a leitura de um arquivo de texto no Node.js de forma síncrona:

```js
const fs = require('fs')

const texto = fs.readFileSync('./arquivo.txt')
```

O método `readFileSync()` é síncrono, ou seja, quando for chamado, a execução do programa será pausada para que o processamento da leitura do arquivo seja finalizado.

Como o ideal é executarmos o código o mais rápido possível, devemos paralelizar o máximo de operações que for possível.

A leitura de arquivos é uma operação de I/O (_Input/Output ou Entrada e Saída_), e esse tipo de operação é mais lenta que processamento em memória.

Para corrigir isso podemos paralelizar a função e torná-la assíncrona, no exemplo abaixo faremos isso passando uma função de callback como argumento, então o JavaScript utilizará o _EventLoop_ para "registrar" essa função:

```js
const fs = require('fs')

fs.readFile('./arquivo.txt', (err, texto) => {
  // fazer alguma coisa com o arquivo
})
```

De maneira resumida, o método `readFile()` só executará a função de callback quando o processo de leitura do arquivo for finalizado:

```js
function readFile(path, callback) {
  if (!path) throw new Error('Path is required')

  // Aqui ele faz a leitura do arquivo de forma assíncrona
  // Aqui ele cria "err" como variável de erros e "data" como variável com o conteúdo

  callback(err, dados)
}
```

Existem outras APIs que possibilitam o uso fluxo assíncrono, entre elas a API de _Eventos_, quando atribuímos uma função para o evento 'click' de um botão, por exemplo, estamos registrando um callback para ser executado quando o botão for acionado:

```js
const button = document.getElementById('enviar')

button.addEventListener('click', event => {
  console.log('Clicou no botão!')
})
```

## Por que Promises?

Antes das Promises já existiam maneiras de se trabalhar de maneira assíncrona, porém as Promises foram criadas focando mais em organização de código do que na funcionalidade.

No exemplo abaixo temos uma função que executa várias ações encadeadas, primeiro ela lê um arquivo, depois escreve em outro arquivo, e por fim chama outras funções assíncronas, isso pode gerar o que chamamos de _Callback Hell_, porque que o código fica difícil de ler:

```js
const fs = require('fs')

fs.readFile('./arquivo.txt', (err, dados) => {
  if (err) throw new Error(err)
  fs.writeFile('./outroarquivo.txt', dados, err => {
    if (err) throw new Error(err)
    outraFuncaoAssincrona((err, dados) => {
      const x = dados.split(',')
      const y = x.map(e => e.toUpperCase())
      maisUmaFuncaoAssincrona(y, (err, resultado) => {
        // continua
      })
    })
  })
})
```

O _Callback Hell_ pode ser resolvido extraindo as funções para outros blocos, porém mesmo assim fica difícil de entender o fluxo como um todo porque temos que analisar várias partes do código:

```js
const fs = require('fs')

function callbackRead(err, dados) {
  if (err) throw new Error(err)
  fs.writeFile('./outroarquivo.txt', dados, callbackWrite)
}

function callbackWrite(err) {
  if (err) throw new Error(err)
  outraFuncaoAssincrona(callbackAsync1)
}

function callbackAsync1(err, dados) {
  const x = dados.split(',')
  const y = x.map(e => e.toUpperCase())
  maisUmaFuncaoAssincrona(y, callbackAsync2)
}

function callbackAsync2(err, resultado) {
  // ...
}

fs.readFile('./arquivo.txt', callbackRead)
```

Agora com Promises, o fluxo fica mais fácil de entender, o uso do método `then()` facilita a leitura do pipeline da execução:

```js
const fs = require('fs')
const { promisify } = require('util')
const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

function outraFuncaoAssincrona(parametro) {
  return new Promise((resolve, reject) => {
    resolve(parametro.split(','))
  })
}

function maisUmaFuncaoAssincrona(parametro) {
  return new Promise((resolve, reject) => {
    // continua
  })
}

readFilePromise('./arquivo.txt')
  .then((err, dados) => {
    writeFilePromise('./outroarquivo.txt', dados)
    return dados
  })
  .then(outraFuncaoAssincrona)
  .then(maisUmaFuncaoAssincrona)
  .catch(console.error)
```

Concluíndo, com as Promises nós temos as seguintes vantagens:

- Legibilidade e controle no fluxo de códigos assíncronos.
- Redução do acoplamento entre funções de callback.
- Previsibilidade e detalhamento no tratamento de erros.

## Promises

As Promises funcionam de fato como uma "promessa", elas definem uma ação que será executada no futuro e ela pode ser resolvida (com sucesso) ou rejeitada (com erro).

> Existe diferença entre lançar um erro e rejeitar uma Promise, ao lançar um erro (com `throw`), a execução do código é interrompida, é o equivalente ao dar um `return`, já rejeitar uma Promise fará com que o código continue executando posteriormente.

A Promise é definida por um construtor que precisa receber uma função com argumento, essa função é a operação assíncrona que queremos executar, e por sua vez a função assíncrona recebe dois parâmetros, que também são funções, são eles:

- `resolve`
- `reject`

O `resolve` e o `reject` são duas funções que podem ser invocadas dentro da função assíncrona, elas são usadas respectivamente quando a operação assíncrona for bem sucedida ou quando ela falhar.

### Promise.prototype.then()

O método `Promise.prototype.then()` é o responsável por receber a resposta de sucesso da Promise, na invocação do `resolve()` podemos passar como argumento algum valor que será retornado e passado para função do `then()`:

```js
const promessaHelloWorld = new Promise((resolve, reject) => {
  resolve('Hello World!')
})

promessaHelloWorld.then(value => {
  console.log(value) // 'Hello World!'
})
```

> O retorno de `resolve()` pode ser qualquer tipo de dados porém deve ser único porque o `then()` só aceita um argumento.

Como o método `then()` sempre retorna uma nova Promise, as Promises podem ser encadeadas quantas vezes forem necessárias, ou seja podemos utilizar o retorno do valor da promise anterior e utilizá-lo numa função nova em outro `then()`, isso é chamado de _composição_.

```js
const promessaHelloWorld = new Promise((resolve, reject) => {
  resolve('Hello World!')
})

promessaHelloWorld
  .then(value => value.toUpperCase())
  .then(newValue => {
    console.log(newValue)
  })

// HELLO WORLD!
```

### Promise.prototype.catch()

O método `Promise.prototype.catch()` é um método que pode ser encadeado no `then()`, ele recebe uma função como argumento responsável pelo tratamento de erros quando a Promise não retorna uma resposta de sucesso.

O `catch()` só será exectuado em duas situações:

1. Quando o método `reject()` dentro da função da Promise é invocado.
2. Quando o código dentro de algum `then()` lançar algum erro.

Assim como o `resolve()` pode receber um valor e retorná-lo para o `then()`, o método `reject()` também pode receber um valor que no caso será passado para o `catch()`:

```js
const promessaHelloWorld = new Promise((resolve, reject) => {
  reject('A operação não foi bem sucedida =/')
})

promessaHelloWorld
  .then(value => {
    console.log(value)
  })
  .catch(rejectValue => {
    console.log(rejectValue)
  })
```

## Referências

- [Artigo sobre Promises - Training Center](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
- [then - Doc MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [catch - Doc MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
