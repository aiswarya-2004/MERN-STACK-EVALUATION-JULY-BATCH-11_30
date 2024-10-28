arr=[23,55,11,2,1];
temp=0;
for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            temp=arr[j]
            arr[j]=arr[i]
            arr[i]=temp
        }
 
    }
    
}
console.log(arr);