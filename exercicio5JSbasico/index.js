/*
1 - Crie um for que conte de 0 até 10

2 - Dentro desse laço você deve dobrar o número atual.

3 - Apresente a seguinte mensagem para cada número dentro do laço:

"O dobro do número x é y"
*/

for (let index = 0; index <= 10; index++) {
  const dobroIndex = index * 2
  console.log(`O dobro do número ${index} é ${dobroIndex}`)
}