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

// 81, 73, 52, 42, 34, 22, 18, ...


// function addEvent(el, event, callback, isCapture = false) {
// 	if (!el || !event || !callback || typeof callback !== 'function') return

// 	if (typeof el === 'string') {
// 			el = document.querySelector(el);
// 	}
// 	el.addEventListener(event, callback, isCapture)
// }

// addEvent(document, 'DOMContentLoaded', () => {
// 	const child = document.querySelector('.child')
// 	const parent = document.querySelector('.parent')
// 	const grandparent = document.querySelector('.grandparent')

// 	addEvent(child, 'click', function(e) {
// 			console.log('child');
// 	}, true)

// 	addEvent(parent, 'click', function(e) {
// 			console.log('parent')
// 	}, true)

// 	addEvent(grandparent, 'click', function(e) {
// 			console.log('grandparent')
// 	}, true)

// 	addEvent('html', 'click', function(e) {
// 			console.log('html')
// 	}, true)

// 	addEvent(document, 'click', function(e) {
// 			console.log('document')
// 	}, true)

// 	addEvent(window, 'click', function(e) {
// 			console.log('window')
// 	}, true)
// })

function clickFunc(event) {
	console.log(event.currentTarget)
	console.log(event.target)
}
const fff = 888 + "fsg";
const ddd = fff +'';
const eee = fff.toString();
console.log(fff.toString(2));
// console.log(fff +'');
console.log(typeof ddd);
console.log(typeof eee);
console.log(eee);

let xxx = 5;
let yyy = 5;
console.log(xxx == yyy)
console.log(_.isEqual(xxx, yyy))


let x = 5

x = (x++, x = addFive(x), x *= 2, x -= 5, x += 10)

function addFive(num) {
    return num + 5
}

console.log(addFive(x))
console.log(x)
const falsyValues = ['', 0]
// const falsyValues = [true]
// console.log(Boolean(falsyValues))
console.log(!!falsyValues)

let b = {};
let c;

b.b = 1;
c = b;
c.b = 2;

console.log('b.b =', b.b); // ?
console.log('c.b =', c.b); // ?

console.log(1)

const a = new Promise((resolve, reject) => resolve(console.log(2)))

a.then(res => console.log(3))

setTimeout(() => {
    console.log(4)
}, 0)

console.log(5)
console.log(5)

console.log(true == !false)