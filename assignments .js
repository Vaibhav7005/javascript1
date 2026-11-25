let num= 5

if(num>0){
    console.log("The Number is Positive")
}
else if(num<0){
    console.log("The number is Negative")
}
else{
    console.log("The number is Zero")
}


// #3
n = 12345
sum = 0

 do{
    digit = n % 10
    console.log(digit)
    sum += digit
    n = Math.floor(n / 10)
 }while(n>0)
    console.log(sum)


// #6

for(i=1; i<=50; i++){
    if(i % 3 ==0 && i % 5==0){
        console.log("FizzBuzz")
    
    }else if(i % 5 == 0){
        console.log("Buzz")

    }else if( i % 3 == 0){
        console.log("Fizz")

    }else{
        console.log(i)
    }
}

// #14
n=5
factorial =1

for(i=n; i>0; i--){
    factorial *= i;
}
console.log("Factorial of", n, "is", factorial);

if (factorial < 10) {
    console.log("The factorial is small.");
} else if (factorial >= 10 && factorial <= 100) {
    console.log("The factorial is moderate.");
} else {
    console.log("The factorial is large.");
}

// #2

let num1 = 6; 

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// #3

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let secret = 7

function askGuess() {
    rl.question("Guess the number: ", (answer) => {
        let guess = parseInt(answer);

        if (guess < secret) {
            console.log("Too low! Try again.");
            askGuess();
        } else if (guess > secret) {
            console.log("Too high! Try again.");
            askGuess();
        } else if (guess === secret) {
            console.log("Correct! You guessed the number.");
            rl.close();
        } else {
            console.log("Please enter a valid number.");
            askGuess();
        }
    });
}

askGuess();
 
#4

for (let i = 0; i <= 20; i ++) {
   if (i % 2 == 0){
      console.log(i);  
    }

}


// // #5

let n = 12347;
let sum =0;

while (n>0){
    let digit = n % 10;
    sum = sum + digit;
    n= Math.floor (n / 10);

}
console.log("Sum of digits:"+ sum);


// #7

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(num + " is a prime number.");
} else {
    console.log(num + " is not a prime number.");
}


// #8

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}


// #9

let a = Number(prompt("Enter first number: "));
let b = Number(prompt("Enter second number: "));
let c = Number(prompt("Enter third number: "));

if (a >= b && a >= c) {
    console.log("Largest number is: " + a);
} else if (b >= a && b >= c) {
    console.log("Largest number is: " + b);
} else {
    console.log("Largest number is: " + c);
}

// #10

let str = prompt("Enter a string: ");
let clean = str.toLowerCase().replaceAll(" ", "");
let reversed = "";

for (let i = clean.length - 1; i >= 0; i--) {
    reversed = reversed + clean[i];
}

if (clean === reversed) {
    console.log(str + " is a palindrome.");
} else {
    console.log(str + " is not a palindrome.");
}

// #11



let str = prompt("Enter a string: ");
let text = str.toLowerCase();
let vowels = 0;
let consonants = 0;

for (let i = 0; i < text.length; i++) {
    let ch = text[i];

    if (ch >= "a" && ch <= "z") {
        if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);

// // #12


const prompt = require("prompt-sync")();

let C = Number(prompt("Enter a Number:"));
let reversed = 0;

while (C > 0) {
    let digit = C % 10;
    reversed = reversed * 10 + digit;
    C = Math.floor(C / 10);
}

console.log("Reversed number: " + reversed);


// #13

let oddSum1 = 0;
let evenSum1 = 0;

for(let i =1; i <= 100; i++){
    if (i % 2 === 0){
        evenSum1 = evenSum1 + i;
    }else{
        oddSum1 = oddSum1 + i;
}
}
console.log("sum of even numbers:" + evenSum1);
console.log("sum of odd numbers:" + oddSum1);


// #15

let n =Number(prompt("How many numbers ?"));
let sum2 = 0;
 
for(let i =1; i<=n; i++){
    let num3 =Number (prompt("Enter Number" + i +":"));
    sum2 = sum2 + num3;

}
let average = sum2/n ;

console.log("Sum: " + sum2);
console.log("Average: " + average);

// #16

const prompt = require("prompt-sync")();

let year = Number(prompt("Enter a year: "));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + " is a leap year.");
} else {
    console.log(year + " is not a leap year.");
}


 
//  #17

const prompt = require("prompt-sync")();
let num = Number(prompt("Enter a number: "));

console.log("Divisors of " + num + ":");

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}


// #18
const prompt = require("prompt-sync")();

let n = Number(prompt("How many terms? "));
let a = 0;
let b = 1;
let result = "";

for (let i = 1; i <= n; i++) {
    result = result + a + " ";
    let next = a + b;
    a = b;
    b = next;
}

console.log("Fibonacci sequence: " + result);

// #19

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let temp = num;
let digits = String(num).length;
let sum = 0;

while (temp > 0) {
    let digit = temp % 10;
    sum = sum + Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}

if (sum === num) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}

// #20

const prompt = require("prompt-sync")();

let rows = Number(prompt("Enter number of rows: "));

for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row = row + " * ";
    }
    console.log(row);
}