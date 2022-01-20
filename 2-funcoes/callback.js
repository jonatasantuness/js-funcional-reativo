// Callback

const calcular = (num1, num2, operacao) => {
  return operacao(num1, num2)
}

const somar = (num1, num2) => num1 + num2
const subtrair = (num1, num2) => num1 - num2
const dividir = (num1, num2) => num1 / num2
const multiplicar = (num1, num2) => num1 * num2

console.log(calcular(3, 2, somar))
console.log(calcular(10, 5, subtrair))
console.log(calcular(25, 5, dividir))
console.log(calcular(2.5, 2, multiplicar))

// setTimeout() e setInterval()

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

const delayMessage = (seconds) => {
  setTimeout(() => {
    console.log(`Função delayMessage() exibindo mensagem após ${seconds}s de delay!`)
  }, seconds * 1000)
}

delayMessage(5)