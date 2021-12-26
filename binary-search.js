function binarySearchIntegers(list, item) {
  let first = list[0];
  let last = list[list.length - 1];
  let step = 0;

  while (first <= last) {
    step++;
    const middle = Math.floor((first + last) / 2);
    const itemFound = list[middle];

    console.log(`step : ${step}`);

    if (item === itemFound) {
      return item;
    }

    if (item < itemFound) {
      last = middle - 1;
    } else {
      first = middle + 1;
    }
  }

  return null;
}
