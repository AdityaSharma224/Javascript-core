// What is Prototype in JavaScript?
// In JavaScript, the prototype is a container for methods and properties.
// When methods or properties are added to the prototype of a function,
// array, or string, they become shared by all instances of that particular
// object type. Prototype in general can be understood as a mould and all
// it's instances can be considered as the car made from it.

// Used in JavaScript (before ES6 classes).
// Objects inherit directly from other objects.
// More flexible, as objects can be extended dynamically.
// Uses prototypes (__proto__) instead of classes.


const animal = {
    speak() {
        console.log(`${this.name} makes a sound!`);
    }
};

const dog = Object.create(animal);
dog.name = "Buddy";
dog.speak(); // Buddy makes a sound!

// Key Features:

// No classes; objects inherit directly from other objects.
// Uses Object.create() instead of extends.
// More flexible, as you can modify objects dynamically.

// 4️⃣ Which One to Use?
// ✔️ Use Classical Inheritance if you prefer structured OOP design (e.g., ES6+ classes).
// ✔️ Use Prototypal Inheritance if you need more flexibility (e.g., dynamic objects, mixins).

// In JavaScript, prototypes are the foundation, even for ES6 classes.
// Under the hood, class in JavaScript is just syntactic sugar over prototypal inheritance.

// 🚀 TL;DR:

// Classical Inheritance → Uses classes → More structured.
// Prototypal Inheritance → Uses prototypes → More flexible.

// Why Extending Array.prototype is Risky
// Potential Conflicts: If JavaScript adds a method with the same name in the future, it can break your code.
// Pollution of Global Scope: Every array will have the new method, even if it’s not needed.
// Iteration Issues: If someone uses for...in to loop over an array, it may include prototype methods.


Differences Between Prototypal and Classical Inheritance
Definition
Prototypal inheritance allows objects to inherit directly from other objects.
Classical inheritance uses classes to define blueprints for objects.

Implementation
Prototypal inheritance in JavaScript is done using Object.create() or modifying __proto__.
Classical inheritance is implemented using class and extends.

Flexibility
Prototypal inheritance is dynamic; objects can inherit from any other object and be modified at runtime.
Classical inheritance is static; object structure is predefined in classes.

Instantiation
In prototypal inheritance, objects are cloned or linked from existing objects.
In classical inheritance, objects are instantiated using constructors or class-based methods.

Multiple Inheritance
Prototypal inheritance allows mixing multiple sources of behavior easily.
Classical inheritance does not support multiple inheritance directly (languages like Java use interfaces, while C++ allows multiple inheritance).

Performance
Prototypal inheritance is generally more performant due to direct prototype chain lookup.
Classical inheritance may have deeper inheritance trees, leading to performance overhead.

Use Cases
Prototypal inheritance is preferred for flexible, dynamic object structures and prototypes.
Classical inheritance is used in strongly typed, structured object-oriented programming (OOP) environments.
// prototypal
const animal = {
    makeSound() {
      console.log("Some generic sound");
    }
  };
  
  const dog = Object.create(animal);
  dog.bark = function () {
    console.log("Woof!");
  };
  
  dog.makeSound(); // "Some generic sound"
  dog.bark(); // "Woof!"
  

// classical
class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof!");
    }
  }
  
  const dog = new Dog();
  dog.makeSound(); // "Some generic sound"
  dog.bark(); // "Woof!"
  




