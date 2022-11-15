var read = require("readline-sync")
var passenger = [];
//Array insertion
for(var i=1;i<=10;i++){
    var pass=read.question("enter the name of passenger "+i+":");
    pass = pass.toUpperCase();
    passenger.push(pass);
}
console.log(passenger);
//Array sorting
console.log("sorted array in ascending order is:")
for(var i=0;i<10;i++){
    for(var j=i+1;j<10;j++){
        if(passenger[i].localeCompare(passenger[j])>0){
            var temp=passenger[i];
            passenger[i]=passenger[j];
            passenger[j]=temp;
    
        }
    }
}
console.log(passenger);
//Array sorting in descending order
console.log("sorted array in descending order is:")
for(var i=0;i<10;i++){
    for(var j=i+1;j<10;j++){
        if(passenger[i].localeCompare(passenger[j])<0){
            var temp=passenger[i];
            passenger[i]=passenger[j];
            passenger[j]=temp;
    
        }
    }
}
console.log(passenger);

//Duplicate elements
var arr=[];
console.log("duplicate names in array are:")
var count=0;
for(var i=0;i<10;i++){
    for(var j=i+1;j<10;j++){
        if(passenger[i].localeCompare(passenger[j])== 0){
            arr.push(passenger[i]);
        }
    }
}
console.log(arr);

// // passenger.sort();
// console.log(passenger);
//Array length
for(i=0;i<10;i++){
    var passName=passenger[i];
    var fullName=passName.split(" ");
    var firstName=fullName[0];
    var lastName=fullName[1];
    if(lastName == " "){
        var l=(passName.length)+2;
        console.log("length of "+passenger[i]+"is:"+l);
    }
    else{
    var l=(passName.length)-1;
    console.log("length of "+passenger[i]+" is:"+l);
    }
}
//search in array
var name=read.question("enter the name to search:");
name=name.toUpperCase();
for(i=0;i<10;i++){
 var passName=passenger[i];
 var fullName=passName.split(" ");
 var firstName=fullName[0];
 var lastName=fullName[1];
 if(name == passenger[i]||name == firstName||name == lastName){
    console.log("Name is present at index:"+i);
 }
 }
 //split name at space
 for(i=0;i<10;i++){
    var passName=passenger[i];
    var fullName=passName.split(" ");
    var firstName=fullName[0];
    var lastName=fullName[1];

    console.log("first name is:"+firstName);
    if(lastName == " "){
        console.log("last name is:"+" ")
    }
    else{
    console.log("last name is:"+lastName); 
    }
 }

