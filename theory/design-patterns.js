// Mixin pattern
//💡 Use Case: Allows objects to share reusable behavior without inheritance.

// Enables code reuse without deep inheritance.
// Useful for adding behavior to multiple classes.

// const LoggerMixin = {
//     log() {
//         console.log(`${this.name} is logging...`);
//     }
// };

// class User {
//     constructor(name) {
//         this.name = name;
//     }
// }

// // Apply mixin
// Object.assign(User.prototype, LoggerMixin);

// const user = new User("Alice");
// user.log(); // Alice is logging...

// -------------------------------------------------------------------------------


// Factory Pattern
// Use Case: Creates objects without specifying the exact class.

// Simplifies object creation logic.
// Helps when working with different types of objects.

// function UserFactory(type) {
//   if (type === "admin") {
//     return { role: "admin", permissions: ["read", "write", "delete"] };
//   } else {
//     return { role: "user", permissions: ["read"] };
//   }
// }

// const admin = UserFactory("admin");
// console.log(admin); // { role: "admin", permissions: ["read", "write", "delete"] }

// Singleton Pattern
// 💡 Use Case: Ensures only one instance of a class exists.

// class Database {
//     constructor() {
//         if (!Database.instance) {
//             Database.instance = this;
//         }
//         return Database.instance;
//     }
// }

// const db1 = new Database();
// const db2 = new Database();

// console.log(db1 === db2); // true (same instance)

// Saves memory by reusing a single instance.
// Great for caching, databases, or config settings.
