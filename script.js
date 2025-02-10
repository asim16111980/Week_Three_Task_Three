// Get elements
const ex1 = document.querySelector("#ex1");
const ex1Input = ex1.querySelector(".input");
const ex1Output = ex1.querySelector(".output");
const ex1Button = ex1.querySelector(".button");
const ex2 = document.querySelector("#ex2");
const ex2Input = ex1.querySelector(".input");
const ex2Output = ex1.querySelector(".output");
const ex2Button = ex1.querySelector(".button");
const ex3 = document.querySelector("#ex3");
const ex3Input = ex1.querySelector(".input");
const ex3Output = ex1.querySelector(".output");
const ex3Button = ex1.querySelector(".button");
const ex4 = document.querySelector("#ex4");
const ex4Input = ex1.querySelector(".input");
const ex4Output = ex1.querySelector(".output");
const ex4Button = ex1.querySelector(".button");

// Function to get even numbers between array of numbers
const getEvenNumbers = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.filter((item) => typeof item === "number" && item % 2 === 0);

console.log(getEvenNumbers([1, "a", 2]));

// Function to get largest number between array of numbers
const getMaxNumber = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.reduce(
    (accumulator, current) =>
      typeof current === "number" && current > accumulator
        ? current
        : accumulator,
    0
  );

console.log(getMaxNumber(["m", 1, "10"]));

// Function to reverse the inputed string
const getReversedText = (text) =>
  typeof text === "string" && text.length > 0 && [...text].reverse().join("");

console.log(getReversedText("Web Masters"));

// Function to get array of numbers without duplicated numbers
const getSetOfNumbers = (arr) =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  [...new Set(arr)].filter((item) => typeof item === "number");

console.log(getSetOfNumbers([1, 3, 2, 1, "d", 4, "7", "d", 3]));
