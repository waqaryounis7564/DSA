export function bSearch(arr: number[], item: number) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.round(low + high) / 2;
    let guess = arr[mid];
    if (guess == item) {
      console.log(arr.indexOf(guess));
      break;
    }
    if (guess < item) {
      low += 1;
    } else high -= 1;
  }
}
