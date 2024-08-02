let start = 10;

function countDown(down) {
  console.log(down);
  if (down < 1) {
    return ;
  }
  return countDown(down - 1);
}
countDown(start);

function countDown2(down) {
  console.log(down);
  if (down > 0) {
    down--;
    return countDown2(down);
  }
  return ;
}
countDown2(start);