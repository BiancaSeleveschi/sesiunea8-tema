//a. Scrie o functie care afiseaza numerele de la x la y
function displayNumbers(x, y) {
  for (let i = x; i <= y; i++)
    console.log(i)
}
displayNumbers(3, 8)

//b. Scrie o functie care sa returneze produsul numerelor de la x la y, unde x si y sunt  primiti ca parametrii ai functiei.
function computeProduct(x, y) {
  return x * y;
}
console.log("Produsul este: ", computeProduct(4, 6))

// c.Scrie o functie care sa afiseze produsul si suma numerelor de la x la y, unde x si y sunt  primiti ca parametrii ai functiei.
function displayProdAndSum(x, y) {
  console.log("Produsul numerelor este ", x * y);
  console.log("Suma numerelor este ", x + y);
}
displayProdAndSum(2, 3)

//cu return
function displayImparity(x, y) {
  console.log('Numerele impare sunt: ')
  for (let i = x; i <= y; i++) {
    if (i % 2 != 0 && i % 9 != 0) {
      console.log(i);
    }
    if (i % 9 == 0)
      return 'Primul numar divizibil cu 9 este ' + i;
  }
  return 0;
}
console.log(displayImparity(10, 28))

// e.Scrie o functie care primeste ca parametrii 2 numere a si b si returneaza rezultatul ridicarii lui a la puterea b. Calculul pentru a la puterea b ( ab = a*a*....*a (se inmulteste a cu el insusi de b ori)
function getExponentNumber(a, b) {
  return Math.pow(a, b);
}
console.log(getExponentNumber(3, 2))

// f. Scrie o functie care ca returneaza factorialul unui numar. Calcul factorial (p! = 1*2*3*...*p (se inmultesc numerele de la 1 pana la p))
function computeFactorial(x) {
  let fact = 1;
  for (let i = 1; i <= x; i++) {
    fact = fact * i;
  }
  return fact;
}
console.log("Factorialul numarului este ", computeFactorial(4))

// g. Scrie o functie care afiseaza numerele divizibile cu 6 si numerele divizibile cu 7 la consola din intervalul x,y.
function displayDivisibleNumbers(x, y) {
  console.log("Numerele divizibile cu 6 sunt: ")
  for (let i = x; i <= y; i++) {
    if (i % 6 == 0) {
      console.log(i);
    }
  }
  console.log("Numerele divizibile cu 7 sunt: ")
  for (let j = x; j <= y; j++) {
    if (j % 7 == 0) {
      console.log(j);
    }
  }
}
displayDivisibleNumbers(4, 29);

// h.Scrie o functie care calculeaza suma numerelor divizibile cu 3 si suma numerelor divizibile cu 7 din intervalul [1, n] si afiseaza rezultatele
function computeSum(n) {
  let sum = 0;
  let sum1 = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      sum = sum + i;
    }
    if (i % 7 == 0) {
      sum1 = sum1 + i;
    }
  }
  console.log("Suma numerelor divizibile cu 3 este ", sum);
  console.log("Suma numerelor divizibile cu 3 este ", sum1);
}
computeSum(13);

// i.Scrie o functie care sa printeze primele n numere din sirul lui Fibonacci (stiati ca e foarte intalnit in natura? ) (Sirul lui fibonaci: primele 2 numere: 1 si 1, n = n-1 + n-2 => ad 3-lea nr este 1+1 =2, al 4-lea nr este 1+2 = 3, al 5-lea nr este 2+3 =5 , al 6-lea nr este 5+3 =8, etc)
function getFirstFibonacciNumbers(n) {
  if (n === 1) {
    return [0, 1];
  }
  else {
    let fib = getFirstFibonacciNumbers(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    return fib;
  }
}
console.log("Numerele lui Fibonacci sunt: ", getFirstFibonacciNumbers(8))

// fara return
function getFirstFibonacciNumberss(n) {
  if (n === 1) {
    console.log([0, 1]);
  }
  else {
    let fib = getFirstFibonacciNumbers(n - 1);
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    console.log(fib)
  }
}
getFirstFibonacciNumberss(6);

// j.Scrie o functie care verifica daca un numar introdus de la tastatura este numar prim (adica daca se imparte exact doar la 1 si la el insusi) (returneaza un boolean)
function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0)
      return false;
  }
  return true;
}
console.log("Numarul este prim: ", isPrime(37))
console.log("Numarul este prim: ", isPrime(35))

// k. Scrie o functie care returneaza true daca intervalul x,y contine un numar care este divizibil si cu 3 si cu 4, altfel returneaza false
function displayDivisibleNumb(x, y) {
  for (let i = x; i <= y; i++) {
    if (i % 3 == 0 && i % 4 == 0) {
      return true;
    }
  }
  return false;
}
console.log(displayDivisibleNumb(5, 28));

// l.Scrie o functie care returneaza media numerelor divizibile cu 6 din intervalul [1,n].
function computeMean(n) {
  let sum = 0;
  let contor = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 6 == 0) {
      sum = sum + i;
      contor++;
    }
  }
  return sum / contor;
}
console.log(computeMean(13))

// m. Scrie o functie care afiseaza fiecare numar ridicat la puterea a 3-a, din intervalul x,y (a3 = a*a*a)
function displayExponentsOf3(x, y) {
  console.log("Numerele exponente lui 3 sunt: ")
  let exponent = 3;
  for (let i = x; i <= y; i++) {
    console.log(i ** exponent);
    //console.log( Math.pow(i, exponent);
  }
}
displayExponentsOf3(2, 7);

// n. Scri o functie care afiseaza produsul dintre fiecare 2 numere consecutive din intervalul x,y
// Exemplu: input: (2,6) => 2*3, 4*5, 6 =>6, 20, 6
// Exemplu: input (2,7) => 2*3, 4*5, 6*7 => 6, 20, 42
function computeSumOfConsecutiveNumbers(x, y) {
  console.log("Suma a doua numere consecutive din interval este: ")
  for (let i = x; i <= y; i++) {
    console.log(i + (i + 1));
  }
}
computeSumOfConsecutiveNumbers(2, 5)

// o. Scri o functie care primeste ca parametru n, nr de randuri si afiseaza pe n randuri acest pattern de stelute:
// Pt n =4:
// *
// **
// ***
// ****
function displayNumbersOStars(n) {
  for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i))
  }
}
displayNumbersOStars(4)


// p. Scrie o functie care primeste ca parametru n, nr de randuri si afiseaza pe n randuri acest pattern de stelute:
// Pt n =4:
//    * 
//   * * 
//  * * * 
// * * * *
function displayNumbersOStarss(n) {
  let a = "";
  let m = n - 1;
  for (i = 1; i <= n; i++) {
    a = a.trim();
    a = ' '.repeat(m) + a + (i > 1 ? ' ' : '') + '*';
    console.log(a);
    m--;
  }
}
displayNumbersOStarss(5)

// q. Scri o functie care afiseaza toate numerele prime din intervalul [x,y]
function displayNumPrime(x, y) {
  console.log("Numerele prime din interval sunt: ")
  for (let i = x; i <= y; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (i > 1 && isPrime) {
      console.log(i);
    }
  }
}
displayNumPrime(4, 31);

// r. Scrie o functie care returneaza cel mai mare numar prim din intervalul [x,y]
// function displayMaxPrimeNumber(x, y) {
//   for (let i = x; i <= y; i++) {
//     isPrime = true;
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (i > 1 && isPrime) {
//       return Math.max(i);
//     }
//   }
// }
// console.log("Cel mai mare numar prim este ", displayMaxPrimeNumber(3, 12))

// s. Scrie o functie care returneaza numarul de numere prime din intervalul [x,y]
function displayContorPrimeNumbers(x, y) {
  let contor = 0;
  for (let i = x; i <= y; i++) {
    isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (i > 1 && isPrime) {
      contor++;
    }
  }
  return contor;
}
console.log("Numerele prime rezultate din intervalul functiei sunt in total ", displayContorPrimeNumbers(3, 11))

// t. Scrie o functie care returneaza adevarat daca exista cel putin 3 numere in intervalul [x,y] altfel fals,
function displayBoolean(x, y) {
  let contor = 0;
  for (let i = x; i <= y; i++) {
    contor++;
    if (contor >= 3) {
      return true;
    }
  }
  return false;
}
console.log(displayBoolean(3, 4));
console.log(displayBoolean(3, 17));

// u. Scrie o functie care gaseste toate perechile de numere din intervalul x,.y a carei suma este mai mare ca 10
// function foundSum10(x, y) {
//   let sum = 10;
//   let pairs;
//   for (let i = x; i < y; i++) {
//     for (let j = i + 1; j < y; j++) {
//       pairs = i + j;
//       if (pairs > sum) {
//         pairs.push(i+j);
//         console.log(i+ j);
//       }
//     }
//   }
//   return pairs;
// }
// console.log("dddddddddddddd " , foundSum10(3, 8))

//v.  Scrie o functie care primeste un numar si returneaza numarul de cifre ale numarului (se foloseste while).
function displayTheNumberOfDigits(num) {
  let result = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    result++
  }
  return result;
}
console.log('The number of digits is ', displayTheNumberOfDigits(24334));

//rezolvata fara while
function displayNumODigits(num) {
  return ('' + num).length;
}
console.log('The number of digits is ', displayNumODigits(2445334));

// x. Scrie o functie care verifica daca un numar este palindrom (se scrie la fel de la stanga la dreapta si de la dreapta la stanga)
// Exemplu: 121 - palindrom, 1221 - palindrom, 123 - nu este palindrom.
function isPalindrome(num) {
  return num === Number(num.toString().split('').reverse().join(''));
}
console.log(isPalindrome(123));
console.log(isPalindrome(121));

// x. Scrie o functie care schimba literele unui string din litere mari in litere mici si invers.
function changeUpperLowerCase(word) {
  console.log(word.toUpperCase())
  console.log(word.toLowerCase())
}
changeUpperLowerCase("Maria")

// y.Scrie o functie care returnewza numarul de vocale dintr-un string
function computeVowels(word) {
  return word.match(/[aeiou]/ig).length;
}
console.log(computeVowels("Mihaela"));

// z. Scrie o functie care afiseaza nr de spatii si nr de virgule dintr-un string
function computeSpaces(word) {
  console.log("The number of spaces is ", word.split(/[ ]+/).length - 1);
  console.log("The number of commas is ", word.split(/[,]+/).length - 1);
}
computeSpaces("Ce faci, Ioana?")
