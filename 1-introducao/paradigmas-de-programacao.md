# Paradigmas de Programação

O conhecimento de Paradigmas de Programação é essencial para contruir uma base sólida na carreira como programador, os paradigmas ajudam a estruturar problemas do mundo real e transformá-los em software.

## O que é um Paradigma de Programação?

É o modelo ou padrão que você irá seguir para estruturar o software e o que rege as linguagens de programação. Todas as linguagem tem suas peculiaridades, porém elas tendem a se enquadrar em algum paradigma ou até mesmo ser **multiparadigma** como é o caso do JavaScript.

## Principais Paradigmas

Neste curso o foco é o paradigma Funcional, porém existem outros paradigmas, como:

### Paradigma Imperativo/Procedural

Utilizado para programação de uso geral, assim como o verbo em modo imperativo na gramática, o paradigma Imperativo (ou Procedural) expressa ordens ou pedidos. Normalmente consiste em listas de instruções ou ordens que informam ao compilador o que fazer.

No exemplo abaixo temos um código `do while` em **C**, que pode ser lido como "*Faça isso, enquanto aquilo for verdadeiro*":

```c
int main(void){
  float nota1=0,nota2=0,media=0;
  int resp;

  do { //Faça, execute essa parte do código...

    printf("Digite a primeira nota: ");
    scanf("%f",&nota1);
    printf("Digite a segunda nota: ");
    scanf("%f",&nota2);

    media = (nota1 + nota2)/2;
    printf("Media do aluno = %f\n",media);

    printf("Digite 1 para continuar ou 2 para sair\n");
    scanf("%d", &resp);

  } while (resp==1); //enquanto resposta for == 1. quando isso não mais for verdade, o código é interrompido.

  return 0;
}
```

Exemplos de Linguagem: C, C++, Java, Pascal.

Recomendações de uso:

- O software é único e poucos elementos serão compartilhados.
- O software é estático e não é esperado que mude muito ao longo do tempo.
- Não é esperado a adição de recursos ao projeto ao longo do tempo.

### Programação Orientada a Objetos

Também conhecida pela sigla *OPP*, foi popularizado pelo Java nos anos 90 e é o paradigma mais popular devido ao seus benefícios, como a modularidade do código, facilidade de manutenção, e a capacidade de representação de elementos da vida real em código.

O software é estruturado em coleções de classes e objetos que podem ser instanciados e reutilizados no projeto, no exemplo abaixo temos a representação de um bolo em JavaScript que pode ser replicado como objeto através da keyword `new`:

```js
function Bolo (nome){
    this.nome = nome
    this.sabor = function(){
        return "Que bolo gostoso!"
    }
}

let bolo1 = new Bolo("Morango")
let bolo2 = new Bolo("Chocolate")

console.log(bolo1.nome) // Morango
console.log(bolo2.nome) // Chocolate
```

Exemplos de Linguagem: PHP, Java, Ruby, C#, Python

Recomendações de uso:

- Empresas que possuem muitos programadores que não precisam necessariamente entender tudo sobre cada componente.
- É ideal em projetos onde existe muito código a ser compartilhado e reutilizado.
- Quando são esperadas muitas mudanças no projeto ao decorrer do tempo.