const main = function recursive(num) {
  console.log(num);
  if (num < 10) {
    return  recursive(num+1);
  }
  return;
}
console.log(main(0));

// const main = function counter(i) {
//   console.log(i);
//   if (i < 10) {
//     return counter(i + 1);
//   }
//   return;
// };
// main(0);
