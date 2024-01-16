//Example 4
console.log("Example 4");
for (let i = 5; i >= 1; i--) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i + 1 - 1);
  console.log(stars + spaces);
}

//Example 5
console.log("Example 5");
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i + 1 - 1);
  console.log(spaces + stars);
}
for (let i = 4; i >= 1; i--) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(i + 1 - 1);
  console.log(spaces + stars);
}

//Example 6
console.log("Example 6");
for (let i = 1; i <= 5; i++) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
for (let i = 4; i >= 1; i--) {
  let spaces = " ".repeat(5 - i);
  let stars = "*".repeat(2 * i - 1);
  console.log(spaces + stars);
}
//Example 7
console.log("Example 7");
let stars = "*".repeat(7);
console.log(stars);
for (let i = 7; i >= 1; i--) {
  gaps = " ".repeat(6);
  console.log(gaps + "*");
}
//Example 8
console.log("Example 8");
let star = "*".repeat(7);
console.log(stars);
for (let i = 7; i >= 1; i--) {
  gaps = " ".repeat(6);
  console.log("*" + gaps);
}
