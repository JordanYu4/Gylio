export function removeId(arr, id) {  
  console.log('removing...', arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === id) {
      arr.splice(i, 1);
    }
  }
  console.log('removed', arr);
  return arr;
};