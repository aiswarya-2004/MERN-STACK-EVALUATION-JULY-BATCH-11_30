week_num=7;
day= ['monday', 'tuesday','wednesday','thursday','friday','satuday','sunday']
if(1 <= week_num <= 7){
    console.log(day[week_num-1] );
}
else {
    console.log("invalid week");
}