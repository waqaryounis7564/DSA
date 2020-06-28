export function ascendingOrder(arr: number[]) {
  let asc=[];
  for (let i=0;arr.length>0;i++){
  let smalElement=smallElement(arr);
    asc.push(smalElement);
    let index=arr.indexOf(smalElement);
    arr.splice(index,1);
  }
  console.log(asc)
}



export function smallElement(arr: number[]) {
  let smallestElement = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] < smallestElement) {
      smallestElement = arr[i];
    }

  }
  return smallestElement;
}

