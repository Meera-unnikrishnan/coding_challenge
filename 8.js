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
var num=rd.question("enter the index no:")
for(i=0;i<arr1.length;i++){
    var n1=arr1[num];
    var n2=arr2[num];
}
console.log("fare is :"+n1);
console.log("designation is :"+n2);