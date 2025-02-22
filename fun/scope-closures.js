// @ts-nocheck
const isCompiled = function () {
  var greeting = "hello";
  console.log(greeting);
  // greeting=."Hi"

  function hoisting() {
    var greeting = "hello";
    {
      greeting = "Howdy";
      //   let greeting = "Hi";
      console.log(greeting);
    }
  }
};

function TDZ() {
  return {
    exampleOne() {
      let x;
      console.log("Value of x after declaring with let:", x);
      x = "something";
    },
    exampleTwo() {
      // ERROR: let is hoisted but not initialized until its declaration is evaluated, resulting in the TDZ.
      // Therefore, accessing x before its declaration results in a ReferenceError.
      console.log(x);
      let x = 1;
      console.log(
        "Value of x after declaring and initializing an with let:",
        x
      );
    },
    exampleThree() {
      // NO ERROR: This throws no error because var hoists and initializes with undefined
      console.log(
        "Value of x BEFORE declaring and initializing an with Var:",
        x
      );
      var x = 1;
      console.log(
        "Value of x AFTER before declaring and initializing an with Var:",
        x
      );
      x = "something";
    },
    exampleFour() {
      console.log(x);
      const x = 1;
    },
  };
}

//  https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch1.md#compiler-speak
var students = [
  { id: 14, name: "Kyle" },
  { id: 73, name: "Suzy" },
  { id: 112, name: "Frank" },
  { id: 6, name: "Sarah" },
];

function getStudentName(studentID) {
  for (let student of students) {
    if (student.id == studentID) {
      return student.name;
    }
  }
}

function crazyVar() {
  var x = 1;
  let y = 1;
  const z = 1;
  console.log(x); // 1

  if (true) {
    var x = 2; // This isn't creating a new variable, it's using the same one
    let y = 2;
    const z = 2;
    console.log(x); // 2
  }

  console.log(x); // 2 (not 1 as you might expect!)
  console.log(y);
  console.log(z)
}

function main() {
  crazyVar();
}

main();
