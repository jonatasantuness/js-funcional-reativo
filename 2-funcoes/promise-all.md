# Promise.all()

O método `all()` é utilizado quando queremos executar diversas ações simultaneamente e aguardar pelo resultado de todas elas. É muito utilizado quando precisamos pegar informações de diversas APIs que não estão relacionadas entre si.

Este método recebe como argumento um array de Promises não resolvidas, para que justamente ele possa executar todas elas, logo, ele só para por 2 motivos:

- Pelo menos UMA das promises foi rejeitada
- TODAS as promises foram resolvidas

No exemplo abaixo, utilizaremos o `all()` para simular chamadas à APIs que obtem dados de um cliente de e-commercce, como por exemplo, dados do usuário, carrinho e lista de desejos:

```js
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
```

## Referências

- [Artigo no Medium](https://medium.com/trainingcenter/entendendo-promises-de-uma-vez-por-todas-32442ec725c2)
