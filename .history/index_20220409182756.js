function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
b(1, 2, 3); // 10

console.log(false === undefined);
console.log(false === null);
console.log(null === undefined);