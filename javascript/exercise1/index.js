// Javascript objects
// In pure JS, you can have object as instances of classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  toString() {
    return this.name + ' ' + this.age;
  }
}

const person = new Person('Alice', 31);
console.log(person);

// But you can also use the short sintax using = { }
const person2 = { name: 'Alice', age: 31, toString: () => this.name + ' ' + this.age };
console.log(person2);

// So if you compare the types of both person and person2 you will see that they are both objects:
console.log(typeof person);
console.log(typeof person2);
console.log(typeof person === typeof person2);

// What are properties of an object ? They are elements the compose the object and defined its caracteriscts,
// in the examples above both objects have the properties: name, age and toString (which is a function)
// To access the value or call a properties we use one of the following syntaxes:
console.log(person.name);
console.log(person['name']); // This is usefull when we need to use a variable to call the properties
key = 'name'; console.log(person[key]); // This is the same as person['name'] but it uses the string stored in key

// What if I try to access an property that doesn't exist in an object ? It should return as undefined
console.log('Undefined property of person 1: ', person.motherName);

// The infamous error: 'Cannot read properties of undefined', what does it mean ?
// This error basically says that you are trying to read a property of something that doesn't exist.
// Lets see that in practice
let person3 = null; // Here we initialize a person as null, therefore the object person does not exist yet
// I am going to use a TryCatch here just for the application not to throw an error when executing, but 
try {
  console.log(person3.name); // Trying to access a property of a null object
} catch (error) {
  // Loggin the 'Cannot read property of undefined error';
  console.log(error.message);
}
// Is there a way for us to safely read properties of values that can be undefined ?
// Yes, we have mainly two approaches
// 1. Use an if to check if the value is defined:
// This code only executes if the person is defined
if (person3 !== undefined && person3 !== null) {
  console.log(person.name);
}
// 2. Use the nullable operator (?)
// Does not throw error but logs undefined
console.log(person3?.name);

// If you initialize person3, the error should be fixed
person3 = new Person('Bob', 37);
console.log(person3.name);

// Where does this error usually happen ?
// 1. Missing arguments of functions
// 2. Variables that start as null and are initialized conditionally
// 3. Expected returns of functions that can return null
