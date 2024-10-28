function smallestElement(arr) {
    let minimum = arr[0];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minimum) {
        minimum = arr[i];
      }
    }
  
    return minimum;
  }
  
  const numbers = [10, 5, 8, 20, 3];
  console.log(smallestElement(numbers));