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