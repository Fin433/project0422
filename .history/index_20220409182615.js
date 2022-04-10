function b(x, y, a) {
  arguments[2] = 10;
  alert(a);
}
b(1, 2, 3); // 10