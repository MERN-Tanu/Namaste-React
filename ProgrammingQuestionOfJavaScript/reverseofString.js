// var string = "Welcome to this javaScript guide!";

// let result = string.split("j");

// console.log(result);

function wordsReverse(string) {
  return string.split("").reverse().join("").split(" ").reverse().join(" ");
}
console.log(wordsReverse("Welcome to this javascript guide"));

// function wordsReverser(string) {
//   return string.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(wordsReverser("New string, same results."));
