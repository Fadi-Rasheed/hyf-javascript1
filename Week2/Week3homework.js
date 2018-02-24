// 1 Strings
let myString = "hello,this,is,a,difficult,to,read,sentence" // 1.1

console.log(myString); // 1.2

console.log(myString.length); // 1.4

myString.replace(/,/g , ' '); // 1.5

console.log(myString); // 1.6

// 2 Arrays
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe']; 

favoriteAnimals.push('turtle'); // 2.1

console.log(favoriteAnimals); // 2.2

favoriteAnimals.splice(1 , 0,'meerkat'); //2.3

console.log("the new array is  ['blowfish', 'meerkat', 'capricorn', 'giraffe', 'turtle'] ") // 2.4

console.log(favoriteAnimals); // 2.5

console.log("The array has a length of: " + favoriteAnimals.length ); // 2.6

favoriteAnimals.splice(3,1); // 2.7

console.log(favoriteAnimals); // 2.8

favoriteAnimals.splice( favoriteAnimals.indexOf('meerkat'), 1 ); // 2.9

console.log("The item you are looking for is at index " + favoriteAnimals.indexOf('meerkat')); // 2.10



// More JavaScript 


// 1
function sum(x,y,z) {
    return x + y + z;
}


// 2 
function colorCar(color){
        console.log('a ' + color + 'car');
}
colorCar('red ');


// 3 
let me = { name : 'Fadi', age : '33' };
function print(me) {
        return console.log(me);
}
print(me);


// 4
function vehicleType(color, code){
    if (code == 1) { console.log('a ' + color + ' car');}
    if (code == 2) { console.log('a ' + color + ' motorbike');}
}
vehicleType("blue", 2);


// 5
console.log(3===3 ? 'true':'false');


// 6
function vehicle(color, code, age) {
    if (code == 1) { if (age > 1) {console.log('a ' + color + ' used' +' car')} else {console.log('a ' + color + ' new' +' car');}}
    if (code == 2) { if (age > 1) {console.log('a ' + color + ' used' +' motorbike')} else {console.log('a ' + color + ' new' +' motorbike');}}
}
vehicle("blue", 1, 5);


// 7 
let vehiclesList = ['car','motorbike','caravan', 'bike'  ];


// 8
console.log(vehiclesList[2]);


// 9
function vehicles(color, code, age) {
    if (code == 1) { if (age > 1) {console.log('a ' + color + ' used' +' car')} else {console.log('a ' + color + ' new' +' car');}}
    if (code == 2) { if (age > 1) {console.log('a ' + color + ' used' +' motorbike')} else {console.log('a ' + color + ' new' +' motorbike');}}
    if (code == 3) { if (age > 1) {console.log('a ' + color + ' used' +' caravan')} else {console.log('a ' + color + ' new' +' caravan');}}
    if (code == 4) { if (age > 1) {console.log('a ' + color + ' used' +' bike')} else {console.log('a ' + color + ' new' +' bike');}}
}
vehicles("green", 3, 1);


// 10
let vehiclesList = ['car','motorbike','caravan', 'bike'  ];
let ad = "Amazing Joe's Garage, we service "
function theAd() {
    for (let i=0; i<vehiclesList.length; i++) { vehiclesList[i] = vehiclesList[i] + 's';}
    for (let i=0; i<vehiclesList.length; i++) {
        if (i< vehiclesList.length-2) { vehiclesList[i] = vehiclesList[i] + ' ,'; }
        if (i = vehiclesList.length-2) { vehiclesList[i] = vehiclesList[i] + ' and '; }
        if (i = vehiclesList.length-1) { vehiclesList[i] = vehiclesList[i] + '.'; }
    }
    let v = ad + vehiclesList.join(" ");
    return v;
}
console.log(theAd());


// 11 
vehiclesList.splice(vehiclesList.length-3 , 0,'Truck');


// 12
let obj ={};


// 13 + 14
let teachers = { Phillip : "Html and CSS", Unmesh:"CommandLine", Mauro: "JS"};
console.log(teachers);


// 15
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x==y); // false
console.log(x===y); // false
console.log(z==y); // True
console.log(z==x); // false


// 16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
console.log(o3); // { foo: 'bar' }
o2.foo = 'X';
console.log(o3); // { foo: 'X' } Yes changing o2 changes o3
o1.foo = 'Y';
console.log(o3); // { foo: 'X' } No changing o1 does not changes o3
// Does the order that you assign (o3 = o2 or o2 = o3) matter?
// Yes it matter because o3=o2 means that o3 has been assigned like the value of o2 but when i say o2=o3 then it means o2 has been reassigned  to be like o3

// 17
let bar = 42; 
typeof typeof bar; // 'string' - Beacause typeof bar is word: 'number' so the typeof 'number' is : 'string'
