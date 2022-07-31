# Tratando erros em Promises

A forma mais comum de tratar um erro gerado pelo `reject()` é utilizando o `catch()`, ele pode ser encadeado junto à chamada da função. No exemplo abaixo utilizaremos uma função que pode gerar um erro ou não dado um determinado valor de probabilidade, se o valor for rejeitado, trataremos o erro através do `catch()`.

```javascript
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
```
