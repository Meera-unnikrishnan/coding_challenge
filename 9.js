const rd = require('readline-sync');
var arr1=[];
for(var i=0;i<10;i++){
const dob = rd.question("Enter DOB in yyyy,mm,dd format:"); 
var age = calculate_age(new Date(dob));
console.log(age);
function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

if(age<10){
    console.log("kid");
}
else if(age>10&&age<30){
    console.log("youth");
}
else if(age>30&&age<60){
    console.log("adult");
}
else{
    console.log("older");
}
}
