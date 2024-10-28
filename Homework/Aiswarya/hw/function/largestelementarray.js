function findLargestElement(arr) {
    let maximum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maximum) {
        maximum = arr[i];
      }
    }
  
    return maximum;
  }
  
  const numbers = [10, 5, 8, 20, 3];
  console.log(findLargestElement(numbers));