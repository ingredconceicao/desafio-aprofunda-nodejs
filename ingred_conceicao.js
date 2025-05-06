/*Desafio 1*/
function imprimePares(N){
    for(let i = 0; i<=N ;i++){
        if(i% 2 === 0){
            console.log(i);
        }
    }
}


console.log("Saida: ");
imprimePares(10);


/*Desafio 2

function somaArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
      soma += arr[i];
    }
    return soma;
  }
 
 
  console.log(somaArray([1, 2, 3, 4, 5])); 
*/

  /* Desafio 3

  function ePrimo(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}


console.log(ePrimo(7));  
console.log(ePrimo(10));


/*
  Desafio 4
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
 
 
  fizzBuzz();

  */
 /* Desafio 5

  function contaVogais(str) {
  const vogais = 'aeiouáéíóúâêôãõAEIOUÁÉÍÓÚÂÊÔÃÕ';
  let contador = 0;

  for (let char of str) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  return contador;
}
console.log(contaVogais("Node.js é incrível"));
*/

/*

Desafio 6
function tabuada(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
}


tabuada(5);




Desafio 7

function inverteString(str) {
  return str.split('').reverse().join('');
}

console.log(inverteString("hello")); // Saída: "olleh"



Desafio 8
function maiorNumero(arr) {
  let maior = arr[0];
  for (let num of arr) {
    if (num > maior) maior = num;
  }
  return maior;
}

console.log(maiorNumero([3, 10, 6, 2]));






  Desafio 9
function ePalindromo(str) {
   
    const limpa = str.replace(/\s+/g, '').toLowerCase();
   
    const invertida = limpa.split('').reverse().join('');
    return limpa === invertida;
  }
 
  console.log(ePalindromo("Ame a ema"));    
  console.log(ePalindromo("Olá mundo"));

*/



 /* Desafio 10

  function calculaMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  const media = soma / notas.length;
  const status = media >= 7 ? "Aprovado" : "Reprovado";
  return `${status} - Média: ${media.toFixed(1)}`;
}


console.log(calculaMedia([8, 7, 6])); 
console.log(calculaMedia([5, 6, 4]));*/