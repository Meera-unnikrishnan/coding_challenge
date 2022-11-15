var rd=require("readline-sync")
var arr1=[];
var arr2=[];
var n=rd.question("how many items:");
for(var i=0;i<n;i++){
    var fare=rd.question("enter the flight fare:");
    var dec=parseFloat(fare);
    arr1.push(dec); 
}


// arr1.forEach((item,index)=>{
    var count = 0
    for (let i = 0; i < (n*2); i++) {
        if (i % 2 == 0) {
            arr2.push(arr1[count])
            count++
        }
        else{
            arr2.push(' ')
        }
        
        
    }
    
// })
// console.log(arr1)
// for(var j=0;j<n*2;j++){
//     var num=arr1[j]
//     if(j%2==0){
//         arr2.push(num);
//     }
//     else{
//         arr2.push(" ")
//     }
    
// }
// console.log(arr2);

console.log(arr2)