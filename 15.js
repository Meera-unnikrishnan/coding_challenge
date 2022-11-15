var rd=require("readline-sync")
var max_weight=23;
var ad_charge=15;
var charge=0;
var weight=[];
var new_weight=[];
var l=rd.question("how many passengers:")
for (let i =0;i<l;i++)
{
    var w=rd.question("enter over weight:");
    weight.push(w);

}
// console.log(weight)
for(let j=0;j<weight.length;j++){
    if(weight[j]>23){
        var d=weight[j]-23;
        // console.log(d)
        charge=ad_charge*d; 
        // console.log(charge)
        new_weight.push(charge)  
    }
   
}
for (let i = 0; i < new_weight.length; i++) {
    for (let j = i + 1; j < new_weight.length; j++) {
      if (new_weight[i] > new_weight[j]) {
        temp = new_weight[i];
        new_weight[i] = new_weight[j];
        new_weight[j] = temp;
      }
    }
  }
  console.log("Sorted array is ");
 console.log(new_weight);