arr = [
  8,
  4,
  23,
  42,
  16,
  15,
  3
]

function mergsort(arr) {
  let n = arr.length;
  let mid = 0;
  let left = [];
  let right = [];
  if (n > 1) {
    mid = Math.round(n / 2);
    for (let i = 0; i < mid; i++) {
      left.push(arr[i])
    }
    for (let i = mid; i < n; i++) {
      right.push(arr[i])
    }
  } else {
    return arr
  }
  mergsort(left);
  mergsort(right)
  merge(left, right, arr)
  return arr
}
mergsort(arr)
console.log(mergsort(arr))

function merge(left, right, arr) {
  let i = 0,
    j = 0,
    k = 0
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++
    } else {
      arr[k] = right[j];
      j++
    }
    k++
  }
  if (i < left.length) {
    arr[k] = left[i];
  } else {
    arr[k] = right[j];
  }
}
