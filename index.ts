function reverse(str) {
  let arr = [];
  let lst_indx = str.length - 1;
  for (let i = lst_indx, j = 0; i >= 0; i--, j++) {
    arr[j] = str[i];
  }
  console.log(arr.join(''));
}

reverse('Waqar');
