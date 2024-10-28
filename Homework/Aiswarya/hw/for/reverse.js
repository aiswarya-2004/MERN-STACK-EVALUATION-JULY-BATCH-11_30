var num= 3456;
reverse=0;
for(i=num; i!=0; i++){
reminder=num%10;
reverse=reverse*10+reminder;
num=num/10;
}

  
    console.log(num);
