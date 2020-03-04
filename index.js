const biggestToSmallest = (a, b) => b.length - a.length;
const notEmpty = x => x !== '';

function solution(N) {
  const bin = N.toString(2);
  const onlyZerosList = bin.split('1');
  // N:12655 => 10011110001 => ["", "00", "", "", "", "000", ""]
  const lastI = onlyZerosList.length - 1;
  const isTrullyGap = onlyZerosList[0] == '' && onlyZerosList[lastI] == '';

  if (isTrullyGap) {
    const onlyGapsSorted = onlyZerosList.filter(notEmpty).sort(biggestToSmallest);
    return onlyGapsSorted && onlyGapsSorted[0] ? onlyGapsSorted[0].length : 0;
  }
  return 0;
}

const testN = N => console.log(`Solution(${N}) (${N.toString(2)}) = ${solution(N)};`);


testN(1041);
testN(529);
testN(15);