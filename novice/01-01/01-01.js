// binding
let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);

mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

// consolelog function
let x = 56;
console.log("the value of x is", x);

// return values
console.log(Math.max(9, 4));
console.log(Math.min(2, 4));

//control flow
let theNumber = 9;
console.log("Your number is the square root of " +
            theNumber * theNumber);

theNumber = 986;
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
                theNumber * theNumber);
}

// conditional execution
theNumber = 986;
if (Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " +
                theNumber * theNumber);
}

theNumber = 6/"ok"
if (!Number.isNaN(theNumber)) {
  console.log("Your number is the square root of " +
              theNumber * theNumber);
} else {
  console.log("Hey. Why didn't you give me a number?");
}

let num = 68
if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}

// while and do loop

let j = 0;
while(j < 12){
    console.log(j)
    j = j + 2;
}

let result = 2;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);

//identing code
i = 9
if (false != true) {
    console.log("That makes sense.");
    if (i < 2) {
      console.log("No surprise there.");
    }
  }

// for loops
for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
  }

result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
  }
  console.log(result);

// breaking out of a loop
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
      console.log(current);
      break;
    }
  }
function defaultAction(){
    console.log("Hello")
}
// Dispatching on a value with switch
if (x == "value1") action1();
else if (x == "value2") action2();
else if (x == "value3") action3();
else defaultAction();