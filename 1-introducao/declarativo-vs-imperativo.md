# Declarativo vs Imperativo

A programação funcional se baseia em um estilo de código **"declarativo"**, essa maneira de se trabalhar foca "*no que deve ser feito*", enquanto a imperativa foca em "*como deve ser feito*".

Em paradigmas procedurais ou orientado à objeto, é comum o estilo imperativo, abaixo temos as principais diferenças entre eles:

## Imperativo

Este paradigma foca nos detalhes do funcionamento do algoritimo incluindo manipulação de memória e interface direta com a entrada/saída do programa. 

Exemplo de código em **C#**:

```csharp
var lista = new List<int> { 1, 2, 3, 4, 5, 6, 7, 8 };
var pares = new List<int>();
foreach (var num in lista) if (num % 2 == 0) pares.Add(num);
```

Exemplo de código em JavaScript:

```jsx
function double (arr) {
  let results = []
  for (let i = 0; i < arr.length; i++){
    results.push(arr[i] * 2)
  }
  return results
}
```

**Vantagens**

- Eficiência
- Modelagem natural dos problemas do mundo real
- Dominância de mercado
- Bem estabelecido

**Desvantagens**

- Focaliza o "COMO" e não o "QUE" precisa ser feito
- Difícil legilibilidade

**Exemplos de linguagens:** Pascal, C, Cobol, Python

## Declarativo

Este paradigma foca na semântica, em uma sintaxe mais fluente para humanos, cabendo ao computador decidir qual a melhor solução para essa solicitação. Exemplo de código **SQL**:

```sql
SELECT * FROM Users WHERE Country = 'Brazil';
```

**Vantagens**

- Facilidade de acesso a banco de dados (SQL)
- Conversão de objetos complexos (Pessoa, Empregado) por Binding para trafegar pela rede (XML)

**Desvantagens**

- Ilegilidade do código (Quando usada de forma funcional, como `XML` e `HTML` por exemplo, na qual pode ser difícil entender o seu conteúdo devido às marcações.)

**Exemplos de linguagens:** SQL, XML