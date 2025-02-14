// Challenge One
/* let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); */

/* 
    [++a] [a]
    [++a]
    - Value:11
    - Explain:{pre so it will add 1 then print it}
    [+]
    -Explain: add operator {cz its between two num}
    [+b++]
    - Value:20
    - Explain:+will take the num 20 =>{post so it will print it thenadd 1}
    [+]
    -Explain: add operator {cz its between two num}
    [+c++]
    - Value:80
    - Explain:+will take the num 80 =>{post so it will print it thenadd 1}
    [-]
    -Explain: sub operator {cz its between two num}
    [+a++]
    - Value:11
    - Explain:+will take the num 11 cz a has been increment =>{post so it will print it thenadd 1}

*/

/* 
    console.log(++a + -b + +c++ - -a++ + +a);
    [++a]
    - Value:11
    - Explain:{pre so it will add 1 then print it}
    [+]
    -Explain: add operator {cz its between two num}
    [-b]
    - Value:-20
    - Explain:{Unary Negation will return neg num from the dataa}
    [+]
    -Explain: add operator {cz its between two num}
    [+c++]
    - Value:80
    - Explain:{post so it will print then num then add 1}
    [-]: Sub operation 
    [-a++]
    - Value:-11
    - Explain:{Post so it will print then num then add 1}
    [+]:add operation
    [+a]
    - Value:12
    - Explain:{Unary Plus Return The num from data positive}
    [+]:add operation
    

*/

/*
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);
[--c]:79
[+]: add operator
[+b]:20 {unary plus}
[+]: add operator
[--a]:9
[*]: Mul Operator
[+b++]:20 {unaryplus + Post }
[-]:sub oprator
[+b]:21 {got increment before} 
[*]:Mul Operaator
[a]:var 9
[--a]:8 {pre}
[-]: Sub Operator
[+True]:1 {Unary Plus}



*/

//Challenge Two 2 :

/* let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+e * -d); // 2000
console.log(-d + ++e * ++g + ++f); //173
 */

//Assignenment :
/* 
// Replace ? With Arithmetic Operators
console.log(((10 * 20 * 15) % 3) * 190 * 10 * 400); // 0
console.log(10 - 20 + 15 - (((3 * 190) % 10) % 400)); // 0
console.log(10 - 20 + 15 - 3 - 190 + 10 + 400); // 0
console.log(10 * 20 - 15 * 3 - 190 + 10 + 400); // 0
console.log(10 - 20 + 15 - 3 + (190 % 10) - 400); // 0
 */

/* let num = "10";

// Solution One
console.log(+num + +num); // 6

// Solution Two
console.log((+true / +num) * (+num * +num + +num * +num)); // 6

// Soultion Three
console.log(num++ + num + -true); // 6

// Soultion Four
console.log(--num * (true + true)); // 6

// Solution Five
console.log((num * +true * num) / true / true / num + num); // 6

// Solution Six
console.log(num-- + ++num); // 6
 */
/* 
let points = 10;

points++ + points++ + points++;

console.log(points); // 13

points--, points--, points--, points--, points--;

console.log(points); // 8;
 */

// CHALLENGE 3 NUMBERS:

/* let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

console.log(parseInt(Math.max(a, b, c, d)));

console.log(Math.pow(a, parseInt(d)));

console.log(parseInt(d));
console.log(Math.floor(d));
console.log(Math.round(d));
console.log(Math.trunc(d));

console.log((parseInt(b) / Math.ceil(d)).toFixed(2));

console.log(Math.round(b) / Math.ceil(d));
 */

/* console.log(1_0000_0); // 100000
console.log(6e4 + 4e4); // 100000
console.log(1e5); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.99)); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(10 ** 5); // 100000
console.log(Math.max(10000, 1000, 100000, 12414)); // 100000
console.log(parseInt(100000.258547848774879)); // 100000
console.log(1e2 * 1e3); // 100000

console.log(-Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER.toString().length);

let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(Number(parseFloat(myVar).toFixed(2))); // 100.57

let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num)); // 2

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Number(flt.toFixed(0))); // 10

console.log(Math.floor(Math.random() * 5));
 */
/* 
let a = "Elzero Web School";

console.log(a.toUpperCase().charAt(2) + a.slice(3, 6));

console.log(a.charAt(13).toUpperCase().repeat(8));

console.log(a.substring(0, 6).split());

console.log(a.substr(0, 7) + a.substr(-6));

console.log(
  a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
);
 */
/* THE STRING CHALLENGE IS DONE , PRAYING TIME!!! */

/* ASsignemet STRING METHODES */

/* let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(0, userName.length - 5).toLowerCase()); // e
console.log(
  userName
    .substring(0, userName.length - 5)
    .toLowerCase()
    .repeat(3)
); // eee

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True

 */
/* ASsignemet STRING METHODES  END */

/* ASsignemet OPerators METHODES  START */
/* 
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 != 100 && 10 != 20); // true
console.log(-10 == "-10"); // true
console.log(!(-50 >= +"-40")); // true
console.log(!(10 >= -"-40")); // true
console.log(!("10" != 10)); // true
console.log(!(20 == false)); // true

let num1 = 10;
let num2 = 20;

console.log(num1 !== num2); // true
console.log(!(num1 == num2)); // true
console.log(typeof num1 === typeof num2); // true
console.log(num2 >= num1); // true
console.log(num1 <= num2); // true
console.log(num1 != num2); // true

let a = 20;
let b = 30;
let c = 10;

console.log((a != b && a == c) || a < b); // true
console.log(a <= b && a > c); // true
console.log(!(a == b) && !(a >= b) && !(a <= c) && !(a === c)); // true */

/* ASsignemet OPerators METHODES  END */

/* If Condition Challenge */

/* let a = 10;

a < 10
  ? console.log(10)
  : a >= 10 && a <= 20
  ? console.log(20)
  : a > 40
  ? console.log(40)
  : console.log("Unknown");
 */
/* Write with Ternary If Syntax */

/* let st = "Elzero Web School";

if ((st.length + st.length).toString() === "34") {
  console.log("Good");
}

if (st.substring(st.indexOf("W"), st.indexOf("W") + 1).toLowerCase() === "w") {
  console.log("Good");
}
if (typeof st === "string") {
  console.log("Good");
}
if (typeof st.length === "number") {
  console.log("Good");
}
if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
  console.log("Good");
} */

/* Write with Ternary If Syntax END */

/* Conditions Assignement  */
// Test Case 1
// let num = 9; // "009"

/* if (num < 10) {
  console.log(`00${num}`);
} */

// Test Case 2
// let num = 20; // "020"

/* if (num > 10 && num < 100) {
  console.log(`0${num}`);
} */
// Test Case 3
/* let num = 110; // "110"

if (num >= 100) {
  console.log(`${num}`);
}
 */

/* let num1 = 100;
let str = "100";
let str2 = "40";

// Output

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

if (num1 == str && num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

if (typeof str == typeof str2 && str != str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
 */
/* 
let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output

if (num3 > num1 && typeof num3 != typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}

if (num3 > num1 && num3 == num2 && typeof num3 != typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
  );
}

if (num3 !== num1 && typeof num3 != typeof num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}
 */

// Edit What You Want Here

// let num1 = 9;
// let num2 = 1;
// let num3 = 9;
// let num4 = 38;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if (num1 + num2 < num4s) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if (num1 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if (num1 + num2 + num3 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }

/*------------------------------------------ Conditions Assignement END ------------------------------------------ */

/*------------------------------------------ Switch - If CHALLENGE  ------------------------------------------ */
/* 
let job = "Manager";
let salary = 0;

switch (job) {
  case "Manager":
    salary = 8000;
    console.log("Your salary is : " + salary);
    break;

  case "IT" || "support":
    salary = 6000;
    console.log("Your salary is : " + salary);
    break;

  case "Developer" || "Designer":
    salary = 7000;
    console.log("Your salary is : " + salary);
    break;
  default:
    salary = 4000;
    console.log("Your salary is : " + salary);
    breakl;
}

let holidays = 2;
let money = 0;

if (holidays === 0) {
  money = 5000;
  console.log(`Your Money are : ${money}`);
} else if (holidays === 2) {
  money = 3000;
  console.log(`Your Money are : ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`Your Money are : ${money}`);
} else {
  money = 1000;
  console.log(`Your Money are : ${money}`);
}
 */

/*------------------------------------------ Switch - If CHALLENGE END  ------------------------------------------ */

/*------------------------------------------ Switch - Assaignement  ------------------------------------------ */

// let day = "   tuesday  ";
// // You Need To Remove Spaces And Make First Letter Capital => Friday
// console.log(day.trim().charAt(0).toUpperCase() + day.trim().slice(1));

// switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
//   case "Friday":
//   case "Sunday":
//   case "Saturday":
//     console.log("No Appointments Available");
//     break;
//   case "Thursday":
//   case "Monday":
//     console.log("From 10:00 AM To 5:00 PM");
//     break;
//   case "Tuesday":
//     console.log("From 10:00 AM To 6:00 PM");
//     break;

//   case "Wednesday":
//     console.log("From 10:00 AM To 7:00 PM");
//     break;
//   default:
//     console.log("Its Not A Valid Day");
//     break;
// }

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

/*------------------------------------------ Switch - Assaignement end  ------------------------------------------ */
/*------------------------------------------ Array CHALLENGE  ------------------------------------------ */

// let zero = 0;

// let count = 3;

// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// يسم الله
// my.splice(count + +true, count - +true);
// my.reverse();
// console.log(my); //['Osama', 'Elham', 'Mazero', 'Ahmed']

// console.log(my.slice(zero + +true, count)); // ['Elham', 'Mazero']

// let word = my.slice(+true, +true + +true).toString(); //Elham

// let secWord = my.slice(+true + +true, count).toString(); //Mazero

// console.log(
//   word.substring(zero, +true + +true) + secWord.substring(+true + +true)
// );

// console.log(
//   secWord.substring(word.length - +(+true), word.length) +
//     secWord.substring(word.length).toUpperCase()
// );
/*------------------------------------------ Array CHALLENGE END ------------------------------------------ */
/*------------------------------------------ Array Assignement ------------------------------------------ */

/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(num - num, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.slice(+true - +true, num)); // ["Ahmed", "Elham", "Osama"];

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.splice(0, 1);
friends.splice(2, 1);

console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = finalArr.concat(
  arrTwo.slice(-true),
  arrOne.reverse(),
  arrTwo.slice(+true - +true, -true).reverse()
);

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
console.log(
  words[+true + +true]
    .shift()
    .substring(+true + +true)
    .toUpperCase()
); // ZERO

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

if (haystack.slice(1, 2) == needle) {
  console.log("Found");
} else {
  console.log("Not Found");
}

haystack.slice(1, 2) == needle
  ? console.log("Found")
  : console.log("Not Found");

if (haystack.splice(1, 1) == needle) {
  console.log("Found");
} else {
  console.log("Not Found");
}

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs
  .join("")
  .concat(
    arr2.slice(-true + -true, -true),
    arr1.slice(-true),
    arr2.slice(-true)
  )
  .toString()
  .toLowerCase();

console.log(allArrs); // fxy
 */
/*------------------------------------------ Array Assignement END ------------------------------------------ */

/*------------------------------------------ Loop Assignement  ------------------------------------------ */

/* let start = 10;
let end = 100;
let exclude = 40;

main: for (i = start; i <= end; i += start) {
  if (i === exclude) {
    continue main;
  }
  console.log(i);
}
 */
/* 
let start = 10;
let end = 0;
let stopp = 3;

main: for (let i = start; i > end; i--) {
  if (i < start) {
    console.log(`0${i}`);
  } else {
    console.log(i);
  }
  if (i === stopp) {
    break main;
  }
}
 */

/* let start = 1;
let end = 6;
let breaker = 2;

for (i = start; i <= end; i++) {
  console.log(i);
  for (j = breaker; j < end; ) {
    console.log(`--${j}`);
    j += breaker;
  }
}
 */
/* let index = 10;
let jumpp = 2;

for (;;) {
  console.log(index);
  index -= jumpp;
  if (index === jumpp) break;
}
 */

/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let i = friends.indexOf("Ahmed");
let j = i;
mainn: for (; i < friends.length; i++) {
  if (friends[i].startsWith(letter.toUpperCase()) === true) {
    continue mainn;
  }
  console.log(`${++j} => ${friends[i]}`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
 */

/* let start = 0;
let swappedName = "elZerO";
let result = "";

for (i = start; i < swappedName.length; i++) {
  let char = swappedName[i];
  if (char === swappedName[i].toLowerCase()) {
    result += char.toUpperCase();
  } else {
    result += char.toLowerCase();
  }
}
console.log(result);

// Output
//"ELzERo"
 */

/* let start = 0;
let mix = [
  1,
  2,
  3,
  "A",
  "B",
  "C",
  4,
  5,
  6,
  7,
  8,
  9,
  "D",
  "E",
  "F",
  "G",
  "H",
  10,
];

for (i = start; i < mix.length; ) {
  ++i;
  if (mix[i] === "H") {
    console.log(mix[i]);
  }
  if (typeof mix[i] === "string") continue;
  if (mix[i] === undefined) break;
  console.log(mix[i]);
}

// Output
//2
//3
//4

for (i = start; i < mix.length; i++) {
  if (mix[i] === "H") {
    console.log(mix[i]);
  }
  if (typeof mix[i] === "string") continue;
  if (mix[i] === +true) continue;
  console.log(mix[i]);
}
 */

/*------------------------------------------ Loop Assignement END ------------------------------------------ */
/*------------------------------------------ Loop Challenge ------------------------------------------ */

/* let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];

for (x = 0; x < myAdmins.length; x++) {
  if (myAdmins[x] === "Stop") break;
}
document.write(`<div>We have ${x} Admins</div>
  <hr>`);

for (i = 0; i < myAdmins.length; i++) {
  if (myAdmins[i] === "Stop") break;
  let b = 1;
  document.write(`<div> The Admin for Team ${i + 1} is ${myAdmins[i]}
    <h3>Team Members : </h3>`);
  for (j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j].charAt(0) === myAdmins[i].charAt(0)) {
      document.write(`<p>- ${b++} ${myEmployees[j]} </p>`);
    }
  }
  document.write(`</div>`);
}
 */

/*------------------------------------------ Loop Challenge END------------------------------------------ */
/*------------------------------------------ Loop While Challenge ------------------------------------------ */

/* let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let counter = 0;

while (counter < friends.length) {
  // Check if the current element is a string and doesn't start with "A"
  if (
    typeof friends[counter] === "string" &&
    !friends[counter].startsWith("A")
  ) {
    console.log(friends[counter]);
  }
  // Increment counter to avoid infinite loop
  counter++;
} */

/*------------------------------------------ Loop While Challenge END------------------------------------------ */

/*------------------------------------------ Function Challenge  ------------------------------------------ */

/* /// [a b c] the variales .
// one should be name the other age and the other status.
// let MAKE! BISMI ALLAH

/* function showDetail(a, b, c) {
  var name, age, status;
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : typeof a === "boolean"
    ? (status = a)
    : (a = "Unknown");
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : typeof b === "boolean"
    ? (status = b)
    : (b = "Unknown");
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : typeof c === "boolean"
    ? (status = c)
    : (a = "Unknown");

  if (status === true) {
    console.log(
      `Hello ${name} ,Your Age is : ${age}, You are available for the Hire`
    );
  } else {
    console.log(
      `Hello ${name} ,Your Age is : ${age}, You are not available for the Hire`
    );
  }
}

showDetail("Osama", 38, true);
// */

/* function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

function calculate(firstNum, secondNum, operation) {
  let result;
  if (operation === "add") {
    result = firstNum + secondNum;
  } else if (operation === "subtract") {
    result = firstNum - secondNum;
  } else if (operation === "multiply") {
    result = firstNum * secondNum;
  } else {
    result = firstNum + secondNum;
  }
  if (typeof secondNum === "undefined") {
    result = "Second Number Not Found";
  }
  console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

function ageInTime(theAge) {
  if (theAge < 10 || theAge > 100) {
    console.log("Out Of Range");
  } else {
    let result = theAge * 12;
    console.log(result, "Months");
    console.log((result *= 4), "Weeks");
    console.log((result *= 7), "Days");
    console.log((result *= 24), "Hours");
    console.log((result *= 60), "Minutes");
    console.log((result *= 60), "Seconds");
  }
}
// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(9); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (i = startYear; i < endYear; i++) {
    document.write(`<option value="${i}">${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021); */

/* function multiply(...numbers) {
  let res = 1;
  let flot = 1;
  for (i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "string") {
      continue;
    } else if (numbers[i] % 1 !== 0) {
      flot = parseInt(numbers[i]);
      res *= flot;
    } else {
      res *= numbers[i];
    }
  }
  console.log(res);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
 */

/* let name = function (...name) {
  return `String [${name.join("], [")}] => Done !`;
};

console.log(name("Osama", "Ali", "Mohamed", "Ibrahim"));
 */
// let name = (...name) => `String [${name.join("], [")}] => Done !`;

// console.log(name("Osama", "Ali", "Mohamed", "Ibrahim"));

// /* let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...num) => one + two + parseInt(num);

// console.log(calc(10, myNumbers[0], myNumbers[1]));
//  */
// let myNumbers = [20, 50, 10, 60];

// let calc = function (one, two, ...num) {
//   return one + two + parseInt(num);

// }
// console.log(calc(10, myNumbers[0], myNumbers[1]));

// function getDetails(zName, zAge, zCountry) {
//   function namePattern(zName) {
//     for (i = 0; i < zName.length; i++) {
//       let name;
//       if (zName.charAt(i) === " ") {
//         name = zName.slice(0, i + 2);
//       } else {
//         continue;
//       }
//       return name;
//     }
//     // Osama Mohamed => Osama M.
//     // Ahmed ali => Ahmed A.
//   }
//   function ageWithMessage(zAge) {
//     let age = `Your Age is : ${parseInt(zAge)}`;
//     return age;
//     // 38 Is My Age => Your Age Is 38
//     // 32 Is The Age => Your Age Is 32
//   }
//   function countryTwoLetters(zCountry) {
//     let cont = `You Live in : ${zCountry.slice(0, 2).toUpperCase()}`;
//     return cont;
//     // Egypt => You Live In EG
//     // Syria => You Live In SY
//   }
//   function fullDetails() {
//     return `Hello ${namePattern(zName)}., ${ageWithMessage(
//       zAge
//     )},  ${countryTwoLetters(zCountry)}`;
//   }
//   return fullDetails(); // Do Not Edit This
// }

// console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// // Hello Osama M., Your Age Is 38, You Live In EG

// console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// // Hello Ahmed A., Your Age Is 32, You Live In SY
// console.log(getDetails("Mouad Guemidi", "20 Is The Age", "ALGERIE"));

// let itsMe = () => `Iam A Normal Function`;

// console.log(itsMe()); // Iam A Normal Function

// let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

// console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

// let checker = (salary, status, zName) =>
//   status === "Available"
//     ? `${zName}, My Salary Is ${salary}`
//     : `Iam Not Avaialble`;

// console.log(checker("Osama", "Available", 4000)); // Osama, My Salary Is 4000
// console.log(checker("Ahmed", "Not Available")); // Iam Not Avaialble

// function specialMix(...data) {
//   let somme = 0;
//   let result;
//   for (i = 0; i < data.length; i++) {
//     if (typeof data[i] === "number") {
//       somme += data[i];
//       result = `The Result Is : ${somme}`;
//     } else if (!isNaN(parseInt(data[i]))) {
//       somme += parseInt(data[i]);
//       result = `The Result Is : ${somme}`;
//     } else {
//       result = "All Strings";
//     }
//   }
//   return result;
// }

// console.log(specialMix(10, 20, 30)); // 60
// console.log(specialMix("10Test", "Testing", "20Cool")); // 30
// console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
// console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

/* let mix = "A13BS2ZX";
ha = 1;
let mul = mix
  .split("")
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return ele * ele;
  })
  .join("");

console.log(mul);

let removeChar = ["E", "@", "@", "L", "@", "Z", "E", "@", "R", "@", "O"];

let check = removeChar
  .filter(function (ele) {
    return !ele.startsWith("@");
  })
  .reduce(function (acc, curr) {
    return `${acc}${curr.toLowerCase()}`;
  });

console.log(check);
 */

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString
//   .split("")
//   .filter(function (ele) {
//     return !parseInt(ele) && !ele.startsWith(",") && isNaN(ele);
//   })
//   .map(function (ele) {
//     return ele.startsWith("_") ? (ele = " ") : (ele = ele);
//   })
//   .reduce(function (acc, current, index, arr) {
//     return acc === current
//       ? current
//       : current === arr.at(-true)
//       ? acc
//       : `${acc}${current}`;
//   });
// console.log(solution);
//----------------------------------------------------------Higher Order Function Assignement---------------

// let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// let newArr = mix
//   .map(function (ele) {
//     return typeof ele === "string" ? ele : "";
//   })
//   .reduce(function (acc, curr) {
//     return `${acc}${curr}`;
//   });

// console.log(newArr);
// // Elzero

// let myString = "EElllzzzzzzzeroo";

// let newString = myString.split("").filter(function (ele, i, arr) {
//   return arr[i + 1] === ele ? `` : `${ele}`;
// });
// console.log(newString.join(""));
// // Elzero

// let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let mynewArr = myArray
//   .reduce(function (acc, curr) {
//     if (Array.isArray(curr)) {
//       return acc.concat(curr);
//     } else {
//       return acc.concat(curr);
//     }
//   }, [])
//   .join("");

// console.log(mynewArr);
// // Elzero

// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// let mynewNumbers = numsAndStrings
//   .filter(function (ele) {
//     return typeof ele !== "string";
//   })
//   .map(function (ele) {
//     return -ele;
//   });
// console.log(mynewNumbers); // [-1, -10, 10, 20, -5, -3]

// let nums = [2, 12, 11, 5, 10, 1, 99];

// let newNums = nums.reduce(function (acc, curr) {
//   if (acc !== 500) {
//     if (curr % 2 == 0) {
//       return acc * curr;
//     } else {
//       return acc + curr;
//     }
//   } else {
//     return acc;
//   }
// }, 1);

// console.log(newNums); // 500

//----------------------------------------------------------Higher Order Function Assignement END -------------------------------------------
//----------------------------------------------------------Objects and Modal Assignement ---------------------------------------------------

// Create Your Object Here

// let member = {
//   name: "Elzero",
//   age: 38,
//   country: "Egypt",
//   fullDetails: function () {
//     return `Hello My Name is ${this.name}, My Age Is ${this.age}, I live in ${this.country}`;
//   },
// };

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// // ---------

// // Method One
// objMethodOne = {
//   property: "Method One",
// };

// console.log(objMethodOne.property); // "Method One"

// // Method Two
// objMethodTwo = Object({
//   property: "Method Two",
// });

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// objMethodThree = Object.create({});
// objMethodThree.property = "Method Three";

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// objMethodFour = Object.create({});

// objMethodFour.property = "Method Four";

// console.log(objMethodFour.property); // "Method Four"

// // --------------------------------
// let a = 1;

// let threeNums = {
//   b: 2,
//   c: 3,
//   d: 4,
// };

// let twoNums = {
//   e: 5,
//   f: 6,
// };

// finalObject = Object.assign({ a }, threeNums, twoNums);

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */

// // -------------------

// // The Object To Work With
// let myFavGames = {
//   "Trinity Universe": {
//     publisher: "NIS America",
//     price: 40,
//   },
//   "Titan Quest": {
//     publisher: "THQ",
//     bestThree: {
//       one: "Immortal Throne",
//       two: "Ragnarök",
//       three: "Atlantis",
//     },
//     price: 50,
//   },
//   YS: {
//     publisher: "Falcom",
//     bestThree: {
//       one: "Oath in Felghana",
//       two: "Ark Of Napishtim",
//       three: "origin",
//     },
//     price: 40,
//   },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//   let names = Object.keys(myFavGames)[i];
//   console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//   console.log(`The Publisher Is ${myFavGames[names].publisher}`);
//   console.log(`The Price Is ${myFavGames[names].price}`);

//   // Check If Nested Object Has Property (bestThree)
//   if (myFavGames[names].bestThree !== undefined) {
//     console.log("- Game Has Releases");
//     console.log(`First => ${myFavGames[names].bestThree.one}`);
//     console.log(`Second => ${myFavGames[names].bestThree.two}`);
//     console.log(`Third => ${myFavGames[names].bestThree.three}`);
//   }
//   console.log("#".repeat(20));
// }

// // // Ouput

// // "The Game Name Is Trinity Universe"
// // "The Publisher Is NIS America"
// // "The Price Is 40"
// // "####################"
// // "The Game Name Is Titan Quest"
// // "The Publisher Is THQ"
// // "The Price Is 50"
// // "- Game Has Releases"
// // "First => Immortal Throne"
// // "Second => Ragnarök"
// // "Third => Atlantis"
// // "####################"
// // "The Game Name Is YS"
// // "The Publisher Is Falcom"
// // "The Price Is 40"
// // "- Game Has Releases"
// // "First => Oath in Felghana"
// // "Second => Ark Of Napishtim"
// // "Third => origin"
// // "####################"

// //---------------------------------------------------------- DOM ---------------------------------------------------

// let body = document.body;

// let from = document.forms;

// let title = document.title;

// let images = document.images;

// let geteleid = document.getElementById("soka");

// let clsnm = document.getElementsByClassName("span");

// let tagnme = document.getElementsByTagName("footer");

// let selector = document.querySelector(".homies");

// let selectors = document.querySelectorAll(".span");

// console.log(body);
// console.log("##########################");
// console.log(from);
// console.log("##########################");
// console.log(title);
// console.log("##########################");
// console.log(images);
// console.log("##########################");
// console.log(geteleid);
// console.log("##########################");
// console.log(clsnm);
// console.log("##########################");
// console.log(clsnm[0].innerHTML);
// console.log("##########################");
// console.log(tagnme);
// console.log("##########################");
// console.log(selector);
// console.log("##########################");
// console.log(selectors);
// console.log("##########################");
// console.log(selectors[0]);
// for (i = 1; i <= 100; i++) {
//   let myMainElement = document.createElement("div");

//   let myHeadin = document.createElement("h2");

//   let myParagraph = document.createElement("p");

//   let myText = document.createTextNode(`Product Title ${i}`);

//   let myParagrapht = document.createTextNode(`Product Description`);

//   myMainElement.appendChild(myHeadin);

//   myHeadin.appendChild(myText);

//   myMainElement.appendChild(myParagraph);
//   myParagraph.appendChild(myParagrapht);

//   document.body.appendChild(myMainElement);
// }

// let ele = document.getElementById("open");

// let closes = document.getElementById("close");

// ele.onclick = function () {
//   document.getElementById("model").style.display = "flex";
//   document.getElementById("open").style.display = "none";
// };

// closes.onclick = function () {
//   document.getElementById("model").style.display = "none";
//   document.getElementById("open").style.display = "block";
// };

// //---------------------------------------------------------- DOM CHALLENGE ---------------------------------------------------

// document.body.style.cssText = "margin:0px;";
// // CREATING EELEMENT FOR THE HEADER :
// let header = document.createElement("header");
// let Elzero = document.createElement("h1");
// let lunks = document.createElement("ul");
// let l1 = document.createElement("li");
// let l2 = document.createElement("li");
// let l3 = document.createElement("li");
// let l4 = document.createElement("li");
// let a1 = document.createElement("a");
// let a2 = document.createElement("a");
// let a3 = document.createElement("a");
// let a4 = document.createElement("a");
// // CREATING HEADER ELEMENT CONTENT :
// let ElzeroText = document.createTextNode("Elzero");

// let home = document.createTextNode("Home");
// let abt = document.createTextNode("About");
// let service = document.createTextNode("Service");
// let contact = document.createTextNode("Contact");
// // EDITING HEADER's ELEMENT CONTENT :
// document.body.appendChild(header);
// header.appendChild(Elzero);
// Elzero.appendChild(ElzeroText);
// header.appendChild(lunks);
// lunks.appendChild(l1);
// lunks.appendChild(l2).after(l1);
// lunks.appendChild(l3).after(l2);
// lunks.appendChild(l4).after(l3);

// header.setAttribute("class", "header");

// l1.appendChild(a1);
// l2.appendChild(a2);
// l3.appendChild(a3);
// l4.appendChild(a4);

// a1.appendChild(home);
// a2.appendChild(abt);
// a3.appendChild(service);
// a4.appendChild(contact);
// header.style.cssText =
//   // STYLING HEADER's ELEMENT CONTENT :
//   "display:flex; height:60px; justify-content:space-between; align-items:center; width:-webkit-fill-available;";

// lunks.style.cssText =
//   "display:flex; list-style:none; gap:20px; color:cadetblue; padding-left:10px; padding-right:10px; font-size: 16px; font-family: monospace;font-weight: 800;";
// Elzero.style.cssText =
//   " color:#4b8486; padding-left:10px; padding-right:10px; font-size:30px; font-weight:800; font-family:system-ui;";
// // FINISHING THE HEADER

// // CREATING EELEMENT FOR THE CONTENT :

// let cont = document.createElement("div");

// cont.setAttribute("class", "content");

// let product = document.createElement("div");
// product.setAttribute("class", "product");

// let proSpan = document.createElement("span");
// document.body.appendChild(cont);
// // CREATING CONTENT ELEMENT CONTENT :
// let prText = document.createTextNode("Product");

// product.appendChild(proSpan);
// product.appendChild(prText);

// for (i = 1; i < 16; i++) {
//   product.style.cssText =
//     "width:300px; padding:20px;  background-color:white; display:flex; flex-direction:column; justify-content:space-around; align-items:center; font-size:15px; font-weight:200; font-family:system-ui;";
//   proSpan.style.cssText =
//     "font-size:20px; font-weight:normal; font-family:system-ui;";
//   proSpan.textContent = i;
//   cont.appendChild(product.cloneNode(true));
//   product.appendChild(proSpan).after(prText);
// }

// // STYLING CONTENT ELEMENT CONTENT :
// cont.style.cssText =
//   "padding:10px; display:flex; justify-content:center; gap:20px; align-items:center; background-color:#eee; flex-wrap:wrap;";

// // FINISHING CONTENT

// // CREATING ELEMENT FOR FOOTER :
// let footer = document.createElement("footer");

// document.body.appendChild(footer);

// // CREATING CONTENT ELEMENT FOR FOOTER :

// let footerText = document.createTextNode("Copyright 2021");

// footer.appendChild(footerText);
// // STYLING FOOTER ELEMENT CONTENT :

// footer.style.cssText =
//   "width:100%; height:70px; background-color:#23946b; display:flex; justify-content:center; align-items:center; font-family:system-ui; font-weight:500; color:white; font-size:20px; font-family:system-ui; font-weight:800; text-align:center;";

// //---------------------------------------------------------- DOM CHALLENGE END ---------------------------------------------------
// //---------------------------------------------------------- DOM2 ASSIENGEMENT  ---------------------------------------------------

// let images = document.querySelectorAll("[decoding='async']");

// console.log(images.length);

// for (i = 0; i < images.length; i++) {
//   images[i].setAttribute("alt", "Elzero Logo");
//   images[i].setAttribute(
//     "src",
//     "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
//   );
// }

// let numInput = document.querySelector('[name="dollar"]');
// let numOutput = document.querySelector('[class="result"]');

// let theChanger = 135.54;

// numInput.addEventListener("input", function () {
//   let usern = Number(numInput.value);
//   let convert = usern * theChanger;
//   if (usern > 0 && !isNaN(usern)) {
//     numOutput.textContent = `${usern} USD Dollar = ${convert.toFixed(
//       2
//     )} DzD Dinnar Algerie`;
//   } else {
//     numOutput.textContent = `Please Enter a valide Number!`;
//   }
// });

// let one = document.querySelector("[class='one']").getAttribute("title");
// let two = document.querySelector("[class='two']").getAttribute("title");

// let divOne = document.querySelector("[class='one']");
// let divTWo = document.querySelector("[class='two']");

// divOne.setAttribute("title", two);
// divTWo.setAttribute("title", one);

// let hehe = `${divTWo.textContent}`;
// divTWo.textContent = `${divOne.textContent} ${
//   divOne.classList.length + divOne.classList.length
// }`;
// divOne.textContent = `${hehe}`;

// let conting = document.images;

// for (i = 0; i < conting.length; i++) {
//   if (conting[i].hasAttribute("alt")) {
//     conting[i].setAttribute("alt", "Old");
//   } else {
//     conting[i].setAttribute("alt", "Elzero New");
//   }
// }

// console.log(conting);

// let createNum = document.querySelector("[type='number']");

// let crtText = document.querySelector("[type='text']");

// let kind = document.querySelector("[name='type']");

// let btn = document.querySelector("[type='submit']");

// let res = document.getElementsByClassName("results")[0];

// btn.addEventListener("click", function (event) {
//   TextVal = crtText.value;
//   condi = Number(createNum.value);
//   res.innerHTML = "";

//   for (i = 1; i <= condi; i++) {
//     let newDiv = document.createElement("div");
//     let newSec = document.createElement("section");
//     if (kind.value === document.getElementsByTagName("option")[0].value) {
//       res.appendChild(newDiv);
//       newDiv.textContent = TextVal;
//       newDiv.setAttribute("class", "box");
//       newDiv.setAttribute("title", "element");
//       newDiv.setAttribute("id", `id-${i}`);
//     } else {
//       res.appendChild(newSec);
//       newSec.textContent = TextVal;
//       newSec.setAttribute("class", "box");
//       newSec.setAttribute("title", "element");
//       newSec.setAttribute("id", `id-${i}`);
//     }
//   }
// });

// btn.addEventListener("click", function (e) {
//   e.preventDefault();
// });

// thiis is what ive made while practice

// let div = document.querySelector("div");

// let counter = setTimeout(function () {
//   div.style.display = "flex";
// }, 4000);

// let btn = document.getElementById("banch");

// btn.onclick = function () {
//   div.style.display = "none";
// };

// let bt1 = document.getElementById("stop");
// bt1.onclick = function () {
//   clearTimeout(counter);
// };
// ================================================================= js code for local storages =================================================================
// let fulyBody = document.querySelector(".ourDiv");
// let head = document.querySelectorAll(".ourH");
// let lis = document.querySelectorAll(".back li");
// let lisTre = document.querySelectorAll(".txt li");

// if (window.localStorage.getItem("bGcolor")) {
//   fulyBody.style.backgroundColor = window.localStorage.getItem("bGcolor");
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("bGcolor")}"]`)
//     .classList.add("active");
// }

// if (window.localStorage.getItem("tXcolor")) {
//   head.forEach((h) => {
//     h.style.color = window.localStorage.getItem("tXcolor");
//   });
//   lisTre.forEach((li) => {
//     li.classList.remove("active");
//   });
//   document
//     .querySelector(`[data-color="${window.localStorage.getItem("tXcolor")}"]`)
//     .classList.add("active");
// }

// lis.forEach((li) => {
//   li.addEventListener("click", function (e) {
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");

//     let newColor = e.currentTarget.dataset.color;

//     window.localStorage.setItem("bGcolor", e.currentTarget.dataset.color);

//     fulyBody.style["background-color"] = newColor;
//   });
// });

// lisTre.forEach((li) => {
//   li.addEventListener("click", function (e) {
//     lisTre.forEach((li) => {
//       li.classList.remove("active");
//     });
//     e.currentTarget.classList.add("active");
//     window.localStorage.setItem("tXcolor", e.currentTarget.dataset.color);
//     let newColor = e.currentTarget.dataset.color;
//     head.forEach((h) => {
//       h.style.color = window.localStorage.getItem("tXcolor");
//     });
//   });
// });

// setting up the variables
let userTask = document.querySelector(".text");

let btn = document.querySelector(".add");

let taks = document.querySelector(".tasks");

// window.localStorage.clear();

// ACTION EVENT:

function restore() {
  if (window.localStorage.getItem("id")) {
    let batch = window.localStorage.getItem("id");
    let taskArr = batch.split(",");

    for (let i = 0; i < taskArr.length; i++) {
      Create(taskArr[i]);
    }
  }
}
restore();
btn.addEventListener("click", function () {
  // verifying that the input isn't empty to make actions
  if (Verify() === true) {
    let val = userTask.value;
    let cont = window.localStorage.getItem("id");
    let taskArr = cont ? cont.split(",") : [];
    taskArr.push(val);
    window.localStorage.setItem("id", taskArr.join(","));
    Create();
    Checked();
    if (taks.innerHTML !== "") {
      let dell = document.querySelectorAll(".del");
      dell.forEach((dell) => {
        dell.onclick = function () {
          clear(dell);
          dell.parentElement.remove();
        };
      });
    }
  } else {
    return Verify();
  }
});

Checked();
delEt();
// functions:

// verifying that the input isn't empty:

function Verify() {
  let val = userTask.value;
  return val === ""
    ? userTask.setAttribute("placeholder", "Invalid String??")
    : true;
}

// create the elements task inside the task div:

function Create(ben) {
  let val = ben ? ben : userTask.value;
  let parent = document.querySelector(".tasks");
  let div = document.createElement("div");
  let label = document.createElement("label");
  let input = document.createElement("input");
  let text = document.createElement("text");
  let del = document.createElement("button");
  text.textContent = val;
  parent.appendChild(div);
  div.setAttribute("data-task", "tsk");
  div.setAttribute("class", "ctSk");
  div.appendChild(label);
  label.appendChild(input);
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", "tsTex");
  text.setAttribute("class", "tXt");
  label.appendChild(text);
  div.appendChild(del);
  del.setAttribute("class", "del");
  del.textContent = "Delete";
  userTask.value = "";
}

// to delete the element from the task div or task list:

function clear(dell) {
  let cont = window.localStorage.getItem("id");

  let taskArr = cont ? cont.split(",") : [];

  let taskText = dell.parentElement.innerText.slice(0, -7);

  let index = taskArr.indexOf(taskText);

  if (index !== -1) {
    taskArr.splice(index, 1);
    window.localStorage.setItem("id", taskArr.join(","));
    console.log("done", taskArr);
  } else {
    console.log("not found");
    console.log(taskText);
    console.log(taskArr);
  }
}

// delete the element from the task

function delEt() {
  if (taks.innerHTML !== "") {
    let dell = document.querySelectorAll(".del");
    dell.forEach((dell) => {
      dell.onclick = function () {
        clear(dell);
        dell.parentElement.remove();
      };
    });
  }
}

function Checked() {
  let check = document.querySelectorAll(".tsTex");
  check.forEach((checks) => {
    checks.addEventListener("click", function () {
      let check = this.closest("label").querySelector(".tXt");
      if (this.checked) {
        check.style.textDecoration = "line-through";
        console.log("WHYYY");
      } else {
        check.style.textDecoration = "none";
        console.log("WHYYY!!");
      }
    });
  });
}
