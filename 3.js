var rd=require("readline-sync");
var arr=[];
for(var i=0;i<10;i++){
    var fare=rd.question("enter the flight fare:");
    var dec=parseFloat(fare);
    arr.push(dec);
}
console.log(arr);
for (let i = 0; i < 10; i++) {
  for(let j=0;j<(10-i-1);j++){
    if(arr[j]>arr[j+1]){
      var temp=arr[j];
      arr[j]=arr[j+1];
      arr[j+1]=temp;
    } 
  }  
}
console.log("sorted array is")
console.log(arr);