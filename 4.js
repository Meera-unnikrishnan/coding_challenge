const rd = require('readline-sync');
var arr1=[];
const dob = rd.question("Enter DOB in yyyy,mm,dd format:"); 
var age = calculate_age(new Date(dob));
console.log("your age is "+age);
function calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}
var months=age*12;
var weeks=age*52.176;
var hours=age*24*365;
var day=age*365;
console.log("age in hours is:",+hours);
console.log("age in days is:",+day);
console.log("age in weeks is:",+weeks);
console.log("age in months is:",+months);
console.log("age in years is:",+age);

