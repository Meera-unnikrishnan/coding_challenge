var rd=require("readline-sync");
var name = rd.question("enter the name of passenger:");
var total_miles=rd.question("enter the total miles travelled:");
var fp=0;
if(total_miles>10000&&total_miles<20000){
  fp=fp+10;
  console.log("flyer points awarded to "+name+" is "+fp);
}
else if(total_miles>20000&&total_miles<50000){
    fp=fp+20;
    console.log("flyer points awarded to "+name+" is "+fp);
  }
else if(total_miles>50000&&total_miles<100000){
    fp=fp+30;
    console.log("flyer points awarded to "+name+" is "+fp);
  }
else{
    fp=fp+50;
    console.log("flyer points awarded to "+name+" is "+fp);
  }