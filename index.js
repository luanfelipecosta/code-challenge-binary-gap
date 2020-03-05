const isEmpty = arr => Boolean(!arr.length);
const biggestToSmallest = (a, b) => b.length - a.length;

const removeEmpty = x => x != '1';

const gapsOnly = arr => arr.filter(removeEmpty).sort(biggestToSmallest);

const getBiggestGap = arr => (isEmpty(gapsOnly(arr)) ? 0 : String(gapsOnly(arr)[0]).length);

function solution(N) {
  const bin = N.toString(2);
  /*
    this will group 0's and keep 1's.
    4104 => 0010010 => ["1", "00000000", "000"]
  */
  const arr = bin.split('1').map(x => (x == '' ? '1' : x));
  console.log(`${N} (${bin}) => ${arr}`);

  if (arr[0] !== '1') {
    console.log(`["00", ...] gap not sorounded by 1 found in the Array's head`);
    arr.shift();
  }
  if (arr[arr.length - 1] !== '1') {
    console.log(`[... , "000"] gap not sorounded by 1 found in the Array's tail`);
    arr.pop();
  }
  console.log(`gaps: ${arr}, biggest: ${getBiggestGap(arr)}`);

  return getBiggestGap(arr);
}

solution(12232);
solution(8573);
solution(487);
solution(12);
