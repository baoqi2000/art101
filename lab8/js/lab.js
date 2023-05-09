/*
 * Author: Baoqi Yu & Haien Liang
 * Created: 2 May 2023
 * Email: <byu27@ucsc.edu> <hliang37@ucsc.edu>
 * Lab 7
 */ 

//Here is the first experinment
function helloWorld(z){
    var results = z + (6-10)*4;
    return results;
}
//test
console.log("The result of this world is: ", results); 

array = [72, 1001, 191, 741, 8866];
//test
console.log("The array is", array);

array.map(helloWorld);
//test
console.log("WHat the result is", result);

array.map(function(z){
    var results = z + 1
    return results;
})
//test
console.log("Let's we guess the reult:", results);

//Here is the second experinment
function helloWorld(z){
    return z + 1 == 4;
}
//test
console.log("The result of this world is: ", helloWorld(5));
console.log("The result of this world is: ", helloWorld(0));
console.log("The result of this world is: ", helloWorld(11));
console.log("The result of this world is: ", helloWorld(3)); 

array = [72, 1001, 191, 741, 8866];
//test
console.log("The array is", array);

var result = array.map(helloWorld);
//test
console.log("WHat the result is", result);

var result = array.map(function(z){
    return z + 1;
})
//test 
console.log("Let's we guess the reult:", results);
