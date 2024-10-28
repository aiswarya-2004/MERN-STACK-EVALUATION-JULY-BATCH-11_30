function duplicate(arr){
    var a= new Set(arr)
    var arr1=Array.from(a)
    console.log(arr1)
  }

  var ar=[2,3,7,3,2,7,5,7]
  duplicate(ar)
