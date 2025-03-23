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

// In JavaScript, prototypes are the foundation, even for ES6 classes. Under the hood, class in JavaScript is just syntactic sugar over prototypal inheritance.

// 🚀 TL;DR:

// Classical Inheritance → Uses classes → More structured.
// Prototypal Inheritance → Uses prototypes → More flexible.

// Why Extending Array.prototype is Risky
// Potential Conflicts: If JavaScript adds a method with the same name in the future, it can break your code.
// Pollution of Global Scope: Every array will have the new method, even if it’s not needed.
// Iteration Issues: If someone uses for...in to loop over an array, it may include prototype methods.




