{
  function removeDuplicates(numArr: number[]): number[] {
    const uniqueArr = numArr.filter(
      (num, index) => numArr.indexOf(num) === index
    );
    return uniqueArr;
  }

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
