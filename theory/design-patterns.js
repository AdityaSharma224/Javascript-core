// Architectural Patterns
// MVC (Model-View-Controller) – Separates business logic (Model), user interface (View), and user input handling (Controller).
// MVVM (Model-View-ViewModel) – Used in frameworks like Angular, React (with state management), and Vue, enabling two-way data binding.
// Microservices Architecture – Breaks an application into independent services, each responsible for a specific functionality.
// Serverless Architecture – Uses cloud services (e.g., AWS Lambda, Firebase Functions) to manage backend logic without dedicated servers.
// Monorepo vs. Polyrepo – Organizing code either in a single repository (monorepo) or multiple repositories (polyrepo).

// Frontend Design Patterns
// Component-Based Architecture – Used in React, Vue, and Angular to build reusable UI components.
// Flux / Redux / Zustand – State management patterns that maintain a unidirectional data flow.
// Atomic Design – Breaks UI into small, reusable components like atoms, molecules, and organisms.
// Lazy Loading & Code Splitting – Improves performance by loading components only when needed.
// Progressive Enhancement – Ensures basic functionality works on all devices while adding advanced features for modern browsers.

// Backend & API Patterns
// Repository Pattern – Abstracts data access to improve maintainability.
// CQRS (Command Query Responsibility Segregation) – Separates read and write operations for better scalability.
// Event-Driven Architecture – Uses event buses or message queues (e.g., Kafka, RabbitMQ) for loosely coupled services.
// GraphQL vs. REST – GraphQL provides flexible data fetching while REST follows standard CRUD principles.
// Authentication & Authorization Patterns – JWT, OAuth, OpenID Connect for secure user management.

// Performance & Scalability Patterns
// Caching (CDN, Redis, Memcached) – Improves performance by storing frequently accessed data.
// Circuit Breaker Pattern – Prevents cascading failures by stopping requests to failing services.
// Rate Limiting & Throttling – Controls API usage to prevent abuse.
// Load Balancing – Distributes traffic across multiple servers for better availability.
// Database Sharding & Replication – Enhances database performance by distributing or duplicating data.

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



