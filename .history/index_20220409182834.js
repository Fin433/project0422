function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
// b(1, 2, 3); // 10

console.log(false == undefined); // false
console.log(false == null);  // false
console.log(null == undefined);  // true
// Пояснение: == сравнивает на равенство и не проверяет идентичность типов, поэтому в третьей строке кода в консоль будет выведено значение true.