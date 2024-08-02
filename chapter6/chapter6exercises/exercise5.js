let val = 1000;
(function immedeate() {
  let val = 500;
  console.log(val);
})();

let result = (function () {
  let val = "Laurence";
  return val;
})();
console.log(result);
console.log(val);
(function (val) {
  console.log(`My name is ${val}`);
})("Laurence");
