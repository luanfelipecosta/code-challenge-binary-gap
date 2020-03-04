# The binary gap (Code challenge)

A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example:

- Number 9 has binary representation `1001` and contains a binary gap of length 2.
- The number 529 has binary representation `1000010001` and contains two binary gaps: one of length 4 and one of length 3.
- The number 20 has binary representation `10100` and contains one binary gap of length 1.
- Number 15 has binary representation `1111` and has no binary gaps.
- Number 32 has binary representation `100000` and has no binary gaps.

Write a function:

`function solution(N);`

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

# My solution

I notice that after splitting our Binary String from N by "1", the result was something like:

```javascript
const arr = N.toString(2).split('1');
/*
  N: 12655 (10011110001)  =>  ["", "00", "", "", "", "000", ""]
  N: 32 (100000)  =>  ["","00000"];
*/
```

Arrays with valid gaps, beggin and ends with "" (old 1's).

```javascript
const isTrullyGap = arr[0] === '' && arr[arr.length - 1] === '';
```

Once is valid, we can remove those empty strings, and order the gaps from the longest to the shortest.

```javascript
const biggestToSmallest = (a, b) => b.length - a.length;
const notEmpty = x => x !== '';

const onlyGapsSorted = arr.filter(notEmpty).sort(biggestToSmallest);
```

and now return the head of the arr. (first index).



