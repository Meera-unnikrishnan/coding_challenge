var rd=require("readline-sync")
var arr1=[];
var arr2=[];
var n=rd.question("how many items:");
for(var i=0;i<n;i++){
    var fare=rd.question("enter the flight fare:");
    var desig=rd.question("enter the designation:");
    var dec=parseFloat(fare).toFixed(2);
    arr1.push(dec); 
    arr2.push(desig);
}
arr1=arr1.concat(arr2);
console.log(arr1);
