{
  function sumArray(numArr: number[]): number {
    let sum = 0;
    numArr.forEach((elem) => {
      sum += elem;
    });
    return sum;
  }

  console.log(sumArray([1, 2, 3, 4, 5]));
}
