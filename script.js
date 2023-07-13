var obj1 = { name: "Person1", age: 5 };
var obj2 = { age: 5, name: "Person1" };

var jsonString1 = JSON.stringify(obj1);
var jsonString2 = JSON.stringify(obj2);

if (jsonString1 === jsonString2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}

var obj = new XMLHttpRequest();

// open a connnection

obj.open('GET','https://restcountries.com/v3.1/all',true)

//send the connection

obj.send();

obj.onload=function(){
    var data=JSON.parse(obj.response)
   // console.log(data)
    for(var flags in data){

        // 2.Display all the flags of the country
        console.log(data[flags].flags)
    }
    for(var name in data){

        //display all the names of the country
        console.log(data[name].name)

        // display all the region of the country
        console.log(data[name].region)

        // display all the subregion of the country
        console.log(data[name].subregion)

        // display all the population of the country
        console.log(data[name].population)
    }
    
    
}
