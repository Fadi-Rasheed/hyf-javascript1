// 1

console.log('Hallo, wereld!'); // Nederlands
console.log('Hello, world!'); // English
console.log('Ciao, mondo!!'); // Italian

// 2

console.log("I'm awesome");

// 3

let x; //3.1
console.log('value variable x will be: seventeen'); //3.2
console.log('17'); //3.3
x = 17; //3.4
console.log('value x will be: 17'); //3.5
console.log('value x will be: seventeen'); //3.6
console.log('17'); //3.6
console.log('the value of x will be: 17'); //3.6
console.log('x'); //3.6

// 4

let y = 'Hello'; // 4.0
console.log('value y will be : Hello'); // 4.1
console.log(y); //4.2
let y = 'World' //4.3
console.log('value y will be : World'); //4.4
let y = 'Hello'; //4.5
console.log('value y will be : Hello'); 
console.log('Hello'); 
let y = 'World'; 
console.log('the value of my string will be: World'); 
console.log('World'); 

// 5
let z = 7.25; //5.1
console.log(z); //5.2
let a = Math.round(z); //5.3
console.log(a); //5.4
let b = Math.max(a,z); //5.5
console.log(b); //5.6

// 6
let homeWork = [ ];  //6.1
console.log('the value of the array is : nothing '); //6.2
console.log(homeWork); //6.3
let myFavoriteAnimals = ["dogs" , "monkeys" , "dolphins"] //6.4
console.log(myFavoriteAnimals); //6.5
myFavoriteAnimals[3] = 'baby pig' // 6.6
console.log(myFavoriteAnimals);

// 7
let myString = "this is a test"  // 7.1
console.log(myString); // 7.2
console.log(myString.length); // 7.3 + 7.4

// 8

// 8.1
let x1 = 7; 
let x2 = false;
let x3 = "test";
let x4 = 32;
// 8.2
console.log('The value of my variable x1 is: 7 ' + x1); 
console.log('The value of my variable x2 is: false ' + x2);
console.log('The value of my variable x1 is: test ' + x3);
console.log('The value of my variable x1 is: 32 ' + x4); 
// 8.3
console.log('The type of my variable x1 is: number '); 
console.log('The type of my variable x2 is: boolean ');
console.log('The type of my variable x3 is: string ');
console.log('The type of my variable x4 is: number ');
// 8.4
typeof x1 
typeof x2
typeof x3
typeof x4 
// 8.5 8.6
if (typeof x1 == typeof x2) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); }  

if (typeof x1 == typeof x3) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); }

if (typeof x1 == typeof x4) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); }

if (typeof x2 == typeof x3) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); }
        
if (typeof x2 == typeof x4) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); }

if (typeof x3 == typeof x4) {
    console.log('SAME TYPE');
    } else { console.log('different TYPE'); } 

// 9

// 9.1
let x = 7; 
x = x % 3 ;
console.log('the new value of x is = 1' + x);
// 9.2
let y1 = 14 ; 
let z1 = y1 % 5 ;
console.log('the new value of z1 is = 4' + z1);
let y2 = 21 ;
let z2 = y2 % 4 ;
console.log('the new value of z2 is = 1' + z2);
let y3 = 44 ;
let z3 = y3 % 9 ;
console.log('the new value of z3 is = 8' +z3); 

// 10

// 10.1
let mixArray = [ 5 , 7 , 9 , 'text' , 'string' ] 
// 10.2
let eyad1 = 6/0; 
let eyad2 = 10/0;
if (eyad1===eyad2) {
    console.log('that is right')
} else {
    console.log('that is wrong') 
}
// 10.3
console.log ('yes you can compare infinities and 6/0 === 10/0')













