# Async / Await

O async/await São features adicionadas no **ECMAScript 2017** e funcionam como um _"syntatic sugar"_ para Promises, ou seja, tornam um código assíncrono mais fácil de escrever e ler, fazendo com que eles tenham a aparência de um código síncrono.

Uma função assícrona declarada com a palavra chave `async` espera pela invocação da palavra chave `await`.

Ao declarar executar a seguinte função síncrona, teremos o retorno dela console, como esperado:

```javascript
function hello() {
  return 'Hello World!'
}

hello() // 'Hello World!'
```

Porém se a função for declarada como assíncrona, ela não fará o retorno da string como esperado, isso porque ela retorna uma **Promise**.

## Referências

- [MDN](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Asynchronous/Async_await)
