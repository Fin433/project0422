function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
// b(1, 2, 3); // 10

console.log(false == undefined); // false
console.log(false == null);  // false
console.log(null == undefined);  // true
// Пояснение: == сравнивает на равенство и не проверяет идентичность типов, поэтому в третьей строке кода в консоль будет выведено значение true.
const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;
console.log(y); // 1
// Пояснение: В данном примере выполнена деструктуризация. По умолчанию переменной у присваивается значение первого элемента массива.
let x = 3;
function fn() {
    x = 10;
    return;
    function x() {}
}

fn();
console.log(x);
81, 73, 52, 42, 34, 22, 18
8, 21, 10, 8, 12, 4